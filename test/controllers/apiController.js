const bodyParser = require('body-parser');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const Feedback = require('../models/feedbackModel');
const geoip = require('geoip-lite');

/**
 * Middleware to handle try/catch for async routes.
 * @param {Function} routeHandler - The route handler function to be executed.
 * @returns {Function} A middleware function for Express.
 */
const asyncRouteHandler = routeHandler => async (req, res, next) => {
    try {
        await routeHandler(req, res, next);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    /**
     * Middleware for handling requests to video player pages.
     * Fetches video data based on the URL and renders the video player page.
     */



    app.get('*/videoPlayer/*', asyncRouteHandler(async (req, res) => {
        const fullPath = req.path;
        const videoContent = await Videos.findOne({
            'page.url_stub': fullPath
        }).exec();

        if (videoContent && videoContent.page &&
            videoContent.page.videoData &&
            videoContent.page.videoData.length > 0) {
            res.render('VideoPlayer', {
                videoData: videoContent.page.videoData
            });
        } else {
            res.status(404).send('Video not found');
        }
    }));

    app.get('*/maths_questions/*', asyncRouteHandler(async (req, res) => {
        const fullPath = req.originalUrl;
        console.log("In question get");
        try {
            const questionContent = await Questions.findOne({
                'page.url_stub': fullPath
            }).exec();

            if (questionContent && questionContent.page &&
                questionContent.page.questionData &&
                questionContent.page.questionData.length > 0) {
                // Check if helpVideo data is also available
                const helpVideo = questionContent.page.helpVideo; // Assuming the structure includes helpVideo
                console.log("videoSrc", helpVideo ? helpVideo.videoSrc : "No videoSrc found");

                res.render('maths_questions', {
                    questionData: questionContent.page.questionData,
                    helpVideo: helpVideo // Now passing helpVideo to the template
                });
            } else {
                console.error(`Questions not found for URL: ${fullPath}`);
                res.status(404).send('Questions not found');
            }
        } catch (error) {
            console.error(`Error fetching questions for URL: ${fullPath}`, error);
            res.status(500).send('An error occurred while fetching questions');
        }
    }));



    /**
     * Middleware for handling all other page requests.
     * Fetches page data based on the URL and renders the appropriate page.
     */
    app.get(/^\/(?!.*(?:question|videoPlayer)).*$/, asyncRouteHandler(async (req, res) => {
        const urlPath = req.path;
        const query = { 'page.url_stub': urlPath };
        const sections = await Layout.findOne(query).exec();

        if (sections) {
            const ip = req.ip || req.connection.remoteAddress;
            // Alternatively, for real client IP if behind a proxy
            // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            const geo = geoip.lookup(ip);
            console.log("IP: ", ip, "Geo: ", geo); // Debugging line



            let locality = 'US'; // Default to 'US' if geo-location fails or is ambiguous
            if (geo && geo.country === 'GB') {
                locality = 'UK'; // Assuming 'GB' is the code for the United Kingdom
            }
            console.log("Locality: ", locality); // Debugging line


            sections.page.sections.forEach(section => {
                if (section.UK_yearGroup || section.US_yearGroup) {
                    let yearGroup = locality === 'UK' ? section.UK_yearGroup : section.US_yearGroup;
                    // Perform replacement only if yearGroup is not undefined
                    if (yearGroup) {
                        section.title = section.title.replace(/Age \d{2}-\d{2}/, yearGroup);
                    }
                }

            });


            res.render('structureEJS', {
                page: sections.page,
                clearVideoFlags: true
            });
        } else {
            res.status(404).send('Page not found');
        }
    }));



    // Importing a library for escaping HTML
    const escapeHtml = require('escape-html');

    // Route to handle form submissions
    app.post('/submit-feedback', asyncRouteHandler(async (req, res) => {
        // Extracting and immediately sanitizing feedback details from the request body
        const feedbackName = escapeHtml(req.body.feedbackName);
        const emailAddress = escapeHtml(req.body.emailAddress);
        const feedback = escapeHtml(req.body.feedback);

        try {
            // Create and save the sanitized feedback document
            await Feedback.create({ feedbackName, emailAddress, feedback });

            console.log("Feedback submitted:", { feedbackName, emailAddress, feedback });
            res.redirect('/'); // Redirect to a 'thank you' page
        } catch (err) {
            console.error("Error submitting feedback:", err);
            res.status(500).send('Error submitting feedback');
        }
    }));


};

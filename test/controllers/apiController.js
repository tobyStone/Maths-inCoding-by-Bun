const bodyParser = require('body-parser');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const Feedback = require('../models/feedbackModel');

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
                console.log("helpVideo data", helpVideo);
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
            res.render('structureEJS', {
                page: sections.page,
                clearVideoFlags: true // Add a flag to tell the client to clear localStorage flags

            });
        } else {
            res.status(404).send('Page not found');
        }
    }));

    // Route to handle form submissions
    app.post('/submit-feedback', asyncRouteHandler(async (req, res) => {
        // Extracting feedback details from the request body
        const { feedbackName, emailAddress, feedback } = req.body;

        try {
            // Create and save the feedback document
            await Feedback.create({ feedbackName, emailAddress, feedback });

            console.log("Feedback submitted:", { feedbackName, emailAddress, feedback });
            res.redirect('/'); // Redirect to the home page or a 'thank you' page
        } catch (err) {
            console.error("Error submitting feedback:", err);
            res.status(500).send('Error submitting feedback');
        }
    }));

};

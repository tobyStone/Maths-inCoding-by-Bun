const bodyParser = require('body-parser');
const Layout = require('../models/linkedPage'); // Import the Layout model
const Videos = require('../models/videoModel'); // Import the VideoData model
const Questions = require('../models/mathQuestionsModel'); // Import the MathQuestions model

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    // Route for video content - VideoPlayer
    // Route for video content - VideoPlayer
    app.get('*/videoPlayer/*', async function (req, res) {
        try {
            // Capture the full URL path after the host
            const fullPath = req.originalUrl;

            // Query the database using the full URL path
            const videoContent = await Videos.findOne({
                'page.url_stub': fullPath
            }).exec();
            console.log("videoContent: ", videoContent);

            // Check if videoContent exists and has the videoData array
            if (videoContent && videoContent.page && videoContent.page.videoData && videoContent.page.videoData.length > 0) {
                // Render the VideoPlayer.ejs template with the videoData
                res.render('VideoPlayer.ejs', { videoData: videoContent.page.videoData });
            } else {
                res.status(404).send('Video not found');
            }
        } catch (err) {
            console.error('Error fetching video data:', err);
            res.status(500).send('Internal Server Error');
        }
    });



    // Route for video content - VideoPlayer
    //app.get('*/videoPlayer/*', async function (req, res) {
    //    try {
    //        // Capture the video ID from the URL
    //        const videoId = req.params.id;
    //        const videoContent = await Videos.findOne({ _id: req.params.id }).exec();
    //        console.log("videoContent: ", videoContent)
    //        if (videoContent) {
    //            res.render('VideoPlayer.ejs', { videoData: videoContent.page.videoDat[0] });
    //        } else {
    //            res.status(404).send('Video not found');
    //        }
    //    } catch (err) {
    //        console.error('Error fetching video data:', err);
    //        res.status(500).send('Internal Server Error');
    //    }
    //});

    // Route for questions - MathsQuestions
    app.get('*/question/*', async function (req, res) {
        try {
            const questionContent = await Questions.findOne({ _id: req.params.id }).exec();
            res.render('maths_questions.ejs', { questionData: questionContent });
        } catch (err) {
            console.error('Error fetching questions data:', err);
            res.status(500).send('Internal Server Error');
        }
    });



    app.get(/^\/(?!.*(?:question|videoPlayer)).*$/, async function (req, res) {
        try {
            // Adjust for root path
            const urlPath = req.path;
            console.log(`Adjusted URL Path: ${urlPath}`);

            // Make sure the query is correctly formatted
            const query = { 'page.url_stub': urlPath };
            console.log(`Database Query: ${JSON.stringify(query)}`);

            // Execute the query
            const sections = await Layout.findOne(query).exec();
            console.log(`Sections: ${sections}`);

            if (sections) {
                // Ensure that you are passing the correct data to the EJS template
                res.render('structureEJS.ejs', { page: sections.page });
            } else {
                res.status(404).send('Page not found');
            }
        } catch (err) {
            console.error('Error fetching sections data:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};





const bodyParser = require('body-parser');
const Layout = require('../models/linkedPage'); // Import the Layout model
const Videos = require('../models/videoModel'); // Import the VideoData model
const Questions = require('../models/mathQuestionsModel'); // Import the MathQuestions model

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

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


    // Route for video content - VideoPlayer
    app.get('*/videoPlayer/*', async function (req, res) {
        try {
            const videoContent = await Videos.findOne({ _id: req.params.id }).exec();
            res.render('VideoPlayer.ejs', { videoData: videoContent });
        } catch (err) {
            console.error('Error fetching video data:', err);
            res.status(500).send('Internal Server Error');
        }
    });

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
};

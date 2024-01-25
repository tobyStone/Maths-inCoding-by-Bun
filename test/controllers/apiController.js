const bodyParser = require('body-parser');
const Layout = require('../models/linkedPage'); // Import the Layout model
const Videos = require('../models/videoModel'); // Import the VideoData model
const Questions = require('../models/mathQuestionsModel'); // Import the MathQuestions model

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Route for the main page - structureEJS
    app.get('/', async function (req, res) {
        try {
            const sections = await Layout.find().exec();
            res.render('structureEJS.ejs', { sections: sections });
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

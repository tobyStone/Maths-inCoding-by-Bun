const bodyParser = require('body-parser');
const Layout = require('../models/linkedPage'); // Import the Layout model
const Videos = require('../models/videoModel'); // Import the VideoData model
const Questions = require('../models/mathQuestionsModel'); // Import the MathQuestions model

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', async function (req, res) {
        try {
            // Use Promise.all to fetch data from MongoDB simultaneously
            const [sections, videoData, questionData] = await Promise.all([
                Layout.find().exec(),
                Videos.find().exec(),
                Questions.find().exec(),
            ]);

            // Render your EJS view and pass the data as variables
            res.render('structureEJS.ejs', { sections });
            res.render('VideoPlayer.ejs', { videoData });
            res.render('maths_questions.ejs', { questionData });
        } catch (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};


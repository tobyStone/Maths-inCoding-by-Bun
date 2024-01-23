const bodyParser = require('body-parser');
const Layout = require('./models/linkedPage'); // Import your data model
const Layout = require('./models/videoModel');
const Layout = require('./models/mathQuestionsModel');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', async function (req, res) {
        try {
            const sections = await Layout.find(); // Fetch data from MongoDB
            const videoData = await Videos.find(); // Fetch data from MongoDB
            const questionData = await Questions.find(); // Fetch data from MongoDB

            // Render your EJS view and pass the sections as a variable
            res.render('structureEJS.ejs', { sections });
            res.render('VideoPlayer.ejs', { videoData });
            res.render('maths_questions.ejs', { questionData });
        } catch (err) {
            console.error('Error fetching sections:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};




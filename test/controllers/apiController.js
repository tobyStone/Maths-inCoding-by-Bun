const bodyParser = require('body-parser');
const Layout = require('./models/linkedPage'); // Import your data model

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', async function (req, res) {
        try {
            const sections = await Layout.find(); // Fetch data from MongoDB

            // Render your EJS view and pass the sections as a variable
            res.render('structureEJS.ejs', { sections });
        } catch (err) {
            console.error('Error fetching sections:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};




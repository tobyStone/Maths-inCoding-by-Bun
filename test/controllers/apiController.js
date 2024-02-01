const bodyParser = require('body-parser');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');

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
        const fullPath = req.originalUrl;
        const videoContent = await Videos.findOne({
            'page.url_stub': fullPath
        }).exec();

        if (videoContent && videoContent.page &&
            videoContent.page.videoData &&
            videoContent.page.videoData.length > 0) {
            res.render('VideoPlayer.ejs', {
                videoData: videoContent.page.videoData
            });
        } else {
            res.status(404).send('Video not found');
        }
    }));

    /**
     * Middleware for handling requests to question pages.
     * Fetches question data based on the URL and renders the question page.
     */
    app.get('*/question/*', asyncRouteHandler(async (req, res) => {
        const questionContent = await Questions.findOne({
            _id: req.params.id
        }).exec();
        res.render('maths_questions.ejs', {
            questionData: questionContent
        });
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
            res.render('structureEJS.ejs', {
                page: sections.page
            });
        } else {
            res.status(404).send('Page not found');
        }
    }));
};

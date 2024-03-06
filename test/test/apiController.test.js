// Use dynamic imports to load all dependencies
let request, expect, app, Video;


// Connect to the test database and seed it before all test suites run
before(async function () {
    this.timeout(TIMEOUT); // A longer timeout for starting up and seeding the database

    // Asynchronous import for chai
    const chaiModule = await import('chai');
    expect = chaiModule.expect;


});




// Increase the timeout for all tests in this file
const TIMEOUT = 30000;

// Mocha's `describe` is used for grouping tests
describe('API Controller', function () {
    this.timeout(30000); // Set the timeout for all tests

    // Mocha's `before` hook runs before all tests
    before(async function () {
        // Extend timeout to accommodate seeding time if needed
        this.timeout(30000);

        console.log('Starting dynamic imports for tests...');

        // Dynamically import supertest and the app
        const supertestModule = await import('supertest');
        request = supertestModule.default;
        const appModule = await import('../app.js');
        app = appModule.default;

        // Dynamically import your models
        const videoModule = await import('../models/videoModel.js');
        global.Video = videoModule.default;
        const questionModule = await import('../models/mathQuestionsModel.js');
        global.Question = questionModule.default;
        const layoutModule = await import('../models/linkedPage.js');
        global.Layout = layoutModule.default;

        console.log('Dynamic imports completed. Tests can now start.');
    });


    // Describe a group of tests for the video player endpoint
    describe('Video Player Endpoint', function () {
        // Test for getting video player data for an existing video
        it('should respond with video player data for existing video', async function () {
            // Use the exact url_stub from your seeded data
            const validVideoPlayerPath = '/number/11_12_age_maths/videoPlayer/lemonoids_coding.js';

            const response = await request(app).get(validVideoPlayerPath);
            expect(response.status).to.equal(200);
            // Check for the presence of specific content in the response that indicates success
            expect(response.text).to.include('Lemonoids'); // Assuming 'Lemonoids' is part of the rendered content
        });
    });


    describe('Math Questions Endpoint', function () {
        // Test for getting math questions for a specific url_stub
        it('should respond with math questions for the specified url_stub', async function () {
            // The URL stub of the math questions you want to retrieve
            // Ensure that it matches the format stored in your database including the initial '/'
            const urlStub = '/maths_questions/angles1';
            const response = await request(app).get(urlStub);

            expect(response.status).to.equal(200);

        });
    });

    describe('Catch-All Page Endpoint', function () {
        // Test for getting page data for a generic page that is not a maths question or video player
        it('should respond with the correct page data for a non-specific page', async function () {
            // Use a URL that does not contain 'question' or 'videoPlayer' and is expected to exist
            const validPagePath = '/number';

            const response = await request(app).get(validPagePath);

            expect(response.status).to.equal(200);

            expect(response.text).to.include('inCoding');
        });

        // Test for 404 response for a page that does not exist
        it('should respond with a 404 status for a non-existing page', async function () {
            const invalidPagePath = '/thispagedoesnotexist';

            const response = await request(app).get(invalidPagePath);

            expect(response.status).to.equal(404);
            expect(response.text).to.equal('Page not found'); // This should match the text sent by the 404 response
        });
    });



    // Helper function to get a valid video ID (you would need to define this)
    async function getValidVideoId() {
        // Implement logic to retrieve a valid ID from your seeded database
        // Ensure this function waits for the seeding to complete before retrieving an ID
        // If necessary, use a delay or poll the database until it returns a valid ID
        let video;
        try {
            video = await Video.findOne().exec();
        } catch (error) {
            throw new Error('Unable to find a valid video ID');
        }
        if (!video) throw new Error('No videos found in the database');
        return video.id;
    }
});

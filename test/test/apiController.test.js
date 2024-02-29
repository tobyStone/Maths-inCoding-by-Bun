// Use dynamic imports to load all dependencies
let request, expect, app;
let Video, Question, Layout, seedDatabase;

// Increase the timeout for all tests in this file
const TIMEOUT = 30000;

// Mocha's `describe` is used for grouping tests
describe('API Controller', function () {
    this.timeout(TIMEOUT); // Set the timeout for all tests

    // Mocha's `before` hook runs before all tests
    before(async function () {
        this.timeout(TIMEOUT); // Extend timeout to accommodate seeding time if needed

        console.log('Starting dynamic imports for tests...');

        // Dynamic imports for chai, supertest, and your app
        const chaiModule = await import('chai');
        expect = chaiModule.expect;
        const supertestModule = await import('supertest');
        request = supertestModule.default;
        const appModule = await import('../app.js');
        app = appModule.default;

        // Dynamic imports for your models
        const videoModule = await import('../models/videoModel.js');
        Video = videoModule.default;

        const questionModule = await import('../models/mathQuestionsModel.js');
        Question = questionModule.default;

        const layoutModule = await import('../models/linkedPage.js');
        Layout = layoutModule.default;

        // Dynamic import for your seedDatabase function
        const setupControllerModule = await import('../controllers/setupController.js');
        seedDatabase = setupControllerModule.seedDatabase;

        console.log('Dynamic imports completed. Starting database seeding...');

        // Seed the database and wait for completion
        try {
            await seedDatabase();
            console.log('Database seeding completed. Waiting for data to settle...');
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
            console.log('Proceeding with tests...');
        } catch (error) {
            console.error('Error during database seeding:', error);
            throw error; // This will fail the tests if seeding fails
        }
    });

    // Mocha's `after` hook runs after all tests
    after(async function () {
        // Perform cleanup, such as closing database connections
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

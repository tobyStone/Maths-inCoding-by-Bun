const mongoose = require('mongoose');
const config = require('../config/index_test');
const { seedDatabase } = require('../controllers/setupController');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const sinon = require('sinon');
let expect;

/**
 * Set up the testing environment before running any tests.
 */
before(async function () {
    this.timeout(50000); // Extend timeout for database connection and seeding

    // Import chai for assertions
    const chaiModule = await import('chai');
    expect = chaiModule.expect;

    let check_string = config.getDbConnectionString();

    // Connect to the test database if not already connected
    if (mongoose.connection.readyState !== 1) {
        try {
            await mongoose.connect(check_string, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('Connected to the test database.', "connection string: ", check_string);
        } catch (error) {
            console.error('Connection failed. Error during database seeding:', error);
            throw new Error('Connection failed'); // Provide a clear error message
        }
    }
});

/**
 * Group tests related to database seeding error handling.
 */
describe('Database Seeding Error Handling', function () {
    this.timeout(30000); // Set a higher timeout for these tests

    let connectStub;
    let insertManyStub;

    // Set up stubs before each test
    beforeEach(function () {
        connectStub = sinon.stub(mongoose, 'connect');
        insertManyStub = sinon.stub(mongoose.Model, 'insertMany');
    });

    // Restore stubs after each test
    afterEach(function () {
        connectStub.restore();
        insertManyStub.restore();
    });

    /**
     * Test that seeding errors are handled properly.
     */
    it('should handle errors during data insertion gracefully', async function () {
        connectStub.resolves(); // Simulate a successful connection
        insertManyStub.rejects(new Error('Insertion failed')); // Simulate an insertion error

        try {
            await seedDatabase();
            expect.fail('seedDatabase should throw an error when insertion fails');
        } catch (error) {
            expect(error.message).to.include('Insertion failed');
        }
    });
});

/**
 * Group tests related to successful database seeding.
 */
describe('Database Seeding', function () {
    this.timeout(30000); // Set a higher timeout for these tests

    /**
     * Test that the database is seeded with the initial data.
     */
    it('should seed the database with Layout, Videos, and Questions data', async function () {
        await seedDatabase();

        // Check counts for each collection to verify seeding
        const layoutsCount = await Layout.countDocuments({});
        const videosCount = await Videos.countDocuments({});
        const questionsCount = await Questions.countDocuments({});

        expect(layoutsCount).to.be.greaterThan(0);
        expect(videosCount).to.be.greaterThan(0);
        expect(questionsCount).to.be.greaterThan(0);
    });
});

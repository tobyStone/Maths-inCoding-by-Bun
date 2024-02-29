const mongoose = require('mongoose');
const { seedDatabase } = require('../controllers/setupController');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const config = require('../config/index');
const sinon = require('sinon');

describe('Database Seeding Error Handling', function () {
    this.timeout(30000); // Increase the timeout to 30 seconds for these tests
    let expect;
    let connectStub;
    let insertManyStub;

    before(async function () {
        const chai = await import('chai');
        expect = chai.expect;
    });

    beforeEach(function () {
        // Stub the mongoose connect method before each test
        connectStub = sinon.stub(mongoose, 'connect');
        // Stub the insertMany method of models to simulate insertion errors
        insertManyStub = sinon.stub(mongoose.Model, 'insertMany');
    });

    afterEach(function () {
        // Restore the stubbed methods after each test
        connectStub.restore();
        insertManyStub.restore();
    });

    it('should handle database connection failure gracefully', async function () {
        // Cause the connect method to reject with an error
        connectStub.rejects(new Error('Connection failed'));

        try {
            await seedDatabase();
            // If seedDatabase doesn't throw, this test should fail
            expect.fail('seedDatabase should throw an error when connection fails');
        } catch (error) {
            expect(error.message).to.equal('Connection failed');
        }
    });

    it('should handle errors during data insertion gracefully', async function () {
        // Simulate a successful database connection
        connectStub.resolves();
        // Cause the insertMany method to reject with an error
        insertManyStub.rejects(new Error('Insertion failed'));

        try {
            await seedDatabase();
            // If seedDatabase doesn't throw, this test should fail
            expect.fail('seedDatabase should throw an error when insertion fails');
        } catch (error) {
            // Update this to match the actual error message you expect
            expect(error.message).to.include('Insertion failed');
        }
    });
});


describe('Database Seeding', function () {
    let expect;

    // Increase timeout if necessary, as database operations can take time
    this.timeout(30000);

    before(async function () {
        // Dynamically import chai with ES Module support
        const chai = await import('chai');
        expect = chai.expect;

        // Connect to the test database
        const connectionString = config.getDbConnectionString();
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });

    after(async function () {
        // Close the database connection after tests
        await mongoose.connection.close();
    });

    it('should seed the database with Layout, Videos, and Questions data', async function () {
        await seedDatabase();

        // Verify that data was inserted for each collection
        const layoutsCount = await Layout.countDocuments({});
        const videosCount = await Videos.countDocuments({});
        const questionsCount = await Questions.countDocuments({});

        expect(layoutsCount).to.be.greaterThan(0);
        expect(videosCount).to.be.greaterThan(0);
        expect(questionsCount).to.be.greaterThan(0);
    });
});



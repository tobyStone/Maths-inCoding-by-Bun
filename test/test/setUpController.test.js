// Global variables to maintain the database state across different test suites
global.mongoose = require('mongoose');
global.config = require('../config/index_test');
const { seedDatabase } = require('../controllers/setupController');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const sinon = require('sinon');
let expect;



// Connect to the test database and seed it before all test suites run
before(async function () {
    this.timeout(50000); // A longer timeout for starting up and seeding the database

    // Asynchronous import for chai
    const chaiModule = await import('chai');
    expect = chaiModule.expect;

    check_string = config.getDbConnectionString()

    // Connect to the test database only if not already connected
    if (mongoose.connection.readyState !== 1) {
        try {

            await mongoose.connect(config.getDbConnectionString(), {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('Connected to the test database.', "connection string: ", check_string);
        } catch (error) {
            const errorMessage = 'Connection failed'; // Use a fixed error message
            console.error(`${errorMessage}. Error during database seeding:`, error);
            throw new Error(errorMessage); // Throw a new Error with the fixed message
        }
    }

});


describe('Database Seeding Error Handling', function () {
    this.timeout(30000); // Increase the timeout to 30 seconds for these tests
    let connectStub;
    let insertManyStub;


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


    // Increase timeout if necessary, as database operations can take time
    this.timeout(30000);


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



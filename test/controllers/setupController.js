const mongoose = require('mongoose');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const config = require('../config/index');
const layoutData = require('./seeds/layoutData.json');
const videoData = require('./seeds/videoData.json');
const mathsQuestionsData = require('./seeds/mathsQuestionData.json');

/**
 * Connects to the database and seeds it with initial data.
 * It performs the following steps:
 * 1. Connects to the MongoDB database using the connection string from the config.
 * 2. Clears existing data from the Layout, Videos, and Questions collections.
 * 3. Inserts new data into these collections from the respective JSON seed files.
 */
async function seedDatabase() {
    try {
        // Establishing database connection
        const connectionString = config.getDbConnectionString();
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database. Starting data seeding.');

        // Clear existing data
        await Layout.deleteMany({});
        await Videos.deleteMany({});
        await Questions.deleteMany({});

        // Seed new data
        await Layout.insertMany(layoutData);
        await Videos.insertMany(videoData);
        await Questions.insertMany(mathsQuestionsData);

        console.log('Data seeding completed.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        // Close the database connection
        // Uncomment these lines if you want to close the connection after seeding
        // mongoose.connection.close();
        // console.log('Database connection closed.');
    }
}

/**
 * Exports a function to seed the database.
 * This function is executed when this module is required.
 * @param {Object} app - The Express application object.
 */
module.exports = function (app) {
    seedDatabase();
};

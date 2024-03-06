const mongoose = require('mongoose');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const config = require('../config/index');
const layoutData = require('./seeds/layoutData.json');
const videoData = require('./seeds/videoData.json');
const mathsQuestionsData = require('./seeds/mathsQuestionData.json');

// Connects to the database, seeds it, and returns the connection
async function connectAndSeed() {
    // Establishing database connection
    const connectionString = config.getDbConnectionString();

    try {
        if (process.env.SEED_DB === 'true') {
            // Ensure not to reconnect if already connected.
            try {
                if (mongoose.connection.readyState === 0) {
                    await mongoose.connect(connectionString, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                    });
                    console.log('Connected to database. Starting data seeding.');
                }
            } catch (error) {
                const errorMessage = 'Connection failed'; // Use a fixed error message
                console.error(`${errorMessage}. Error during database seeding:`, error);
                throw new Error(errorMessage); // Throw a new Error with the fixed message
            }

        }

        // Clear existing data
        await Layout.deleteMany({});
        await Videos.deleteMany({});
        await Questions.deleteMany({});

        // Seed new data
        await Layout.insertMany(layoutData);
        await Videos.insertMany(videoData);
        await Questions.insertMany(mathsQuestionsData);

        console.log('Data seeding completed.');
        return mongoose.connection;
    } catch (error) {
        const errorMessage = 'Insertion failed.'; // Use a fixed error message
        console.error(`${errorMessage}. Error during database seeding:`, error);
        throw new Error(errorMessage); // Throw a new Error with the fixed message
    }


}

// Named export for seedDatabase
exports.seedDatabase = connectAndSeed;

exports.init = async function (app) {
    try {

        // Check if we should seed the database
        // You can control this with an environment variable, e.g., SEED_DB
        if (process.env.SEED_DB === 'true') {
            await connectAndSeed();
            // After seeding, you might want to reset the SEED_DB environment variable
            // Or handle this logic in another way that fits your workflow
        }

    } catch (error) {
        const errorMessage = 'Connection failed'; // Use a fixed error message
        console.error(`${errorMessage}. Error during database seeding:`, error);
        throw new Error(errorMessage); // Throw a new Error with the fixed message
        // Exit process if cannot connect to DB or if seeding fails
        process.exit(1);
    }
};


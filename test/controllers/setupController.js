const mongoose = require('mongoose');
const Layout = require('../models/linkedPage');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define your seed data
const seedData = [
    {
        page: {
            url_stub: 'page1',
            description: 'Description for Page 1',
            sections: [
                {
                    id: 'number',
                    title: 'Number',
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Number',
                    link: null,

                },
                {
                    id: 'algebra',
                    title: 'Algebra',
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Algebra',
                    link: null,
                },
                {
                    id: 'ratio',
                    title: 'Ratio and Proportion',
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Ratio and Proportion',
                    link: null,
                },
                {
                    id: 'probability',
                    title: 'Probability',
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Probability',
                    link: null,
                },
                {
                    id: 'geometry',
                    title: 'Geometry',
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Geometry',
                    link: null,

                },
                {
                    id: 'statistics',
                    title: 'Statistics',
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Statistics',
                    link: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: 'page2',
            description: 'Description for Page 2',
            sections: [
                {
                    id: 'Age 11-12',
                    title: "Age 11-12",
                    picture: 'public/images/age/age_11_12.jpg',
                    imgAlt: 'Age 11 to 12',
                    link: null,
                },

                {

                    id: 'Age 12-13',
                    title: "Age 12-13",
                    picture: 'public/images/age/age_12_13.jpg',
                    imgAlt: 'Age 12 to 13',
                    link: null,

                },

                {

                    id: 'Age 13-14',
                    title: "Age 13-14",
                    picture: 'public/images/age/age_13_14.jpg',
                    imgAlt: 'Age 13 to 14',
                    link: null,

                },

                {

                    id: 'Age 14-15',
                    title: "Age 14-15",
                    picture: 'public/images/age/age_14_15.jpg',
                    imgAlt: 'Age 14 to 15',
                    link: null,

                },

                {

                    id: 'Age 15-16',
                    title: "Age 15-16",
                    picture: 'public/images/age/age_15_16.jpg',
                    imgAlt: 'Age 15 to 16',
                    link: null,

                },

                {

                    id: 'Age 16-18',
                    title: "Age 16-18",
                    picture: 'public/images/age/age_16_18.jpg',
                    imgAlt: 'Age 16 to 18',
                    link: null

                },


            ],
        },
    },
    {
        page: {
            url_stub: 'page3',
            description: 'Description for Page 3',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    picture: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: null,

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    picture: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: null,
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    picture: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },
    {
        page: {
            url_stub: 'page4',
            description: 'Description for Page 4',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    picture: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: null,

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    picture: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: null,
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    picture: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },
    {
        page: {
            url_stub: 'page5',
            description: 'Description for Page 5',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    picture: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: null,

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    picture: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: null,
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    picture: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },
    {
        page: {
            url_stub: 'page6',
            description: 'Description for Page 6',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    picture: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: null,

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    picture: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: null,
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    picture: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    picture: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },


];

// Seed the database with the data
db.once('open', async () => {
    try {
        await Layout.insertMany(seedData);
        console.log('Data seeding completed.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        // Close the database connection
        db.close();
    }
});



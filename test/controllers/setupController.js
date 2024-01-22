const mongoose = require('mongoose');
const Layout = require('../models/linkedPage');



// Define your seed data
const seedData = [
    {
        page: {
            url_stub: '~/Maths_inCoding',
            description: 'Landing page for Maths inCoding website',
            sections: [
                {
                    id: 'number',
                    title: 'Number',
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Number',
                    link: '~/student_age',

                },
                {
                    id: 'algebra',
                    title: 'Algebra',
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Algebra',
                    link: '~/student_age',
                },
                {
                    id: 'ratio',
                    title: 'Ratio and Proportion',
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Ratio and Proportion',
                    link: '~/student_age',
                },
                {
                    id: 'probability',
                    title: 'Probability',
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Probability',
                    link: '~/student_age',
                },
                {
                    id: 'geometry',
                    title: 'Geometry',
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Geometry',
                    link: '~/student_age',

                },
                {
                    id: 'statistics',
                    title: 'Statistics',
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Statistics',
                    link: '~/student_age',
                },
            ],
        },
    },
    {
        page: {
            url_stub: '~/student_age',
            description: 'portal to level of maths knowledge in games-coding, depending on age of student',
            sections: [
                {
                    id: 'Age 11-12',
                    title: "Age 11-12",
                    imgSrc: 'public/images/age/age_11_12.jpg',
                    imgAlt: 'Age 11 to 12',
                    link: '~/11_12_age_maths',
                },

                {

                    id: 'Age 12-13',
                    title: "Age 12-13",
                    imgSrc: 'public/images/age/age_12_13.jpg',
                    imgAlt: 'Age 12 to 13',
                    link: '~/12_13_age_maths',

                },

                {

                    id: 'Age 13-14',
                    title: "Age 13-14",
                    imgSrc: 'public/images/age/age_13_14.jpg',
                    imgAlt: 'Age 13 to 14',
                    link: '~/13_14_age_maths',

                },

                {

                    id: 'Age 14-15',
                    title: "Age 14-15",
                    imgSrc: 'public/images/age/age_14_15.jpg',
                    imgAlt: 'Age 14 to 15',
                    link: '~/14_15_age_maths',

                },

                {

                    id: 'Age 15-16',
                    title: "Age 15-16",
                    imgSrc: 'public/images/age/age_15_16.jpg',
                    imgAlt: 'Age 15 to 16',
                    link: '~/15_16_age_maths',

                },

                {

                    id: 'Age 16-18',
                    title: "Age 16-18",
                    imgSrc: 'public/images/age/age_16_18.jpg',
                    imgAlt: 'Age 16 to 18',
                    link: '~/16_18_age_maths'

                },


            ],
        },
    },
    {
        page: {
            url_stub: '~/11_12_age_maths',
            description: 'games with inbuilt 11 to 12 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '~/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '~/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '~/videoPlayer/water_bucket_Python.js',

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },
    {
        page: {
            url_stub: '~/12_13_age_maths',
            description: 'games with inbuilt 12 to 13 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '~/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '~/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '~/videoPlayer/water_bucket_Python.js',

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },
    {
        page: {
            url_stub: '~/13_14_age_maths',
            description: 'games with inbuilt 13 to 14 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '~/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '~/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '~/videoPlayer/water_bucket_Python.js',

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },
    {
        page: {
            url_stub: '~/14_15_age_maths',
            description: 'games with inbuilt 14 to 15 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '~/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '~/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '~/videoPlayer/water_bucket_Python.js',

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },

    {
        page: {
            url_stub: '~/15_16_age_maths',
            description: 'games with inbuilt 15 to 16 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '~/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '~/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '~/videoPlayer/water_bucket_Python.js',

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },

    {
        page: {
            url_stub: '~/16_18_age_maths',
            description: 'games with inbuilt 16 to 18 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '~/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '~/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '~/videoPlayer/water_bucket_Python.js',

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },

                {

                    id: null,
                    title: null,
                    imgSrc: null,
                    imgAlt: null,
                    link: null,

                },
            ],
        },
    },


];

//empty database of previous entries and
// seed the database with the data
db.once('open', async () => {
    try {
        await Layout.deleteMany({});
        await Layout.insertMany(seedData);
        console.log('Data seeding completed.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
});



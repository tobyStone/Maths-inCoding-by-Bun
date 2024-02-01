const mongoose = require('mongoose');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const config = require('../config/index');



// Define your layout seed data
const seedData = [
    {
        page: {
            url_stub: '/',
            description: 'Landing page for Maths inCoding website',
            sections: [
                {
                    id: 'number',
                    title: 'Number',
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Number',
                    link: '/number',

                },
                {
                    id: 'algebra',
                    title: 'Algebra',
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Algebra',
                    link: '/algebra',
                },
                {
                    id: 'ratio',
                    title: 'Ratio and Proportion',
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Ratio and Proportion',
                    link: '/ratio',
                },
                {
                    id: 'probability',
                    title: 'Probability',
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Probability',
                    link: '/probability',
                },
                {
                    id: 'geometry',
                    title: 'Geometry',
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Geometry',
                    link: '/geometry',

                },
                {
                    id: 'statistics',
                    title: 'Statistics',
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Statistics',
                    link: '/statistics',
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/number',
            description: 'portal to level of maths knowledge in games-coding, depending on age of student',
            sections: [
                {
                    id: 'Age 11-12',
                    title: "Age 11-12",
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Age 11 to 12',
                    link: '/number/11_12_age_maths',
                },

                {

                    id: 'Age 12-13',
                    title: "Age 12-13",
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Age 12 to 13',
                    link: '/number/12_13_age_maths',

                },

                {

                    id: 'Age 13-14',
                    title: "Age 13-14",
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Age 13 to 14',
                    link: '/number/13_14_age_maths',

                },

                {

                    id: 'Age 14-15',
                    title: "Age 14-15",
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Age 14 to 15',
                    link: '/number/14_15_age_maths',

                },

                {

                    id: 'Age 15-16',
                    title: "Age 15-16",
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Age 15 to 16',
                    link: '/number/15_16_age_maths',

                },

                {

                    id: 'Age 16-18',
                    title: "Age 16-18",
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Age 16 to 18',
                    link: '/number/16_18_age_maths'

                },
            ]
        },
    },


    {
        page: {
            url_stub: '/algebra',
            description: 'portal to level of maths knowledge in games-coding, depending on age of student',
            sections: [
                {
                    id: 'Age 11-12',
                    title: "Age 11-12",
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Age 11 to 12',
                    link: '/algebra/11_12_age_maths',
                },

                {

                    id: 'Age 12-13',
                    title: "Age 12-13",
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Age 12 to 13',
                    link: '/algebra/12_13_age_maths',

                },

                {

                    id: 'Age 13-14',
                    title: "Age 13-14",
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Age 13 to 14',
                    link: '/algebra/13_14_age_maths',

                },

                {

                    id: 'Age 14-15',
                    title: "Age 14-15",
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Age 14 to 15',
                    link: '/algebra/14_15_age_maths',

                },

                {

                    id: 'Age 15-16',
                    title: "Age 15-16",
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Age 15 to 16',
                    link: '/algebra/15_16_age_maths',

                },

                {

                    id: 'Age 16-18',
                    title: "Age 16-18",
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Age 16 to 18',
                    link: '/algebra/16_18_age_maths'

                },
            ]
        },
    },
    {
        page: {
            url_stub: '/ratio',
            description: 'portal to level of maths knowledge in games-coding, depending on age of student',
            sections: [
                {
                    id: 'Age 11-12',
                    title: "Age 11-12",
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Age 11 to 12',
                    link: '/ratio/11_12_age_maths',
                },

                {

                    id: 'Age 12-13',
                    title: "Age 12-13",
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Age 12 to 13',
                    link: '/ratio/12_13_age_maths',

                },

                {

                    id: 'Age 13-14',
                    title: "Age 13-14",
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Age 13 to 14',
                    link: '/ratio/13_14_age_maths',

                },

                {

                    id: 'Age 14-15',
                    title: "Age 14-15",
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Age 14 to 15',
                    link: '/ratio/14_15_age_maths',

                },

                {

                    id: 'Age 15-16',
                    title: "Age 15-16",
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Age 15 to 16',
                    link: '/ratio/15_16_age_maths',

                },

                {

                    id: 'Age 16-18',
                    title: "Age 16-18",
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Age 16 to 18',
                    link: '/ratio/16_18_age_maths'

                },
            ]
        },
    },
    {
        page: {
            url_stub: '/probability',
            description: 'portal to level of maths knowledge in games-coding, depending on age of student',
            sections: [
                {
                    id: 'Age 11-12',
                    title: "Age 11-12",
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Age 11 to 12',
                    link: '/probability/11_12_age_maths',
                },

                {

                    id: 'Age 12-13',
                    title: "Age 12-13",
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Age 12 to 13',
                    link: '/probability/12_13_age_maths',

                },

                {

                    id: 'Age 13-14',
                    title: "Age 13-14",
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Age 13 to 14',
                    link: '/probability/13_14_age_maths',

                },

                {

                    id: 'Age 14-15',
                    title: "Age 14-15",
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Age 14 to 15',
                    link: '/probability/14_15_age_maths',

                },

                {

                    id: 'Age 15-16',
                    title: "Age 15-16",
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Age 15 to 16',
                    link: '/probability/15_16_age_maths',

                },

                {

                    id: 'Age 16-18',
                    title: "Age 16-18",
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Age 16 to 18',
                    link: '/probability/16_18_age_maths'

                },
            ]
        },
    },
    {
        page: {
            url_stub: '/geometry',
            description: 'portal to level of maths knowledge in games-coding, depending on age of student',
            sections: [
                {
                    id: 'Age 11-12',
                    title: "Age 11-12",
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Age 11 to 12',
                    link: '/geometry/11_12_age_maths',
                },

                {

                    id: 'Age 12-13',
                    title: "Age 12-13",
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Age 12 to 13',
                    link: '/geometry/12_13_age_maths',

                },

                {

                    id: 'Age 13-14',
                    title: "Age 13-14",
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Age 13 to 14',
                    link: '/geometry/13_14_age_maths',

                },

                {

                    id: 'Age 14-15',
                    title: "Age 14-15",
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Age 14 to 15',
                    link: '/geometry/14_15_age_maths',

                },

                {

                    id: 'Age 15-16',
                    title: "Age 15-16",
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Age 15 to 16',
                    link: '/geometry/15_16_age_maths',

                },

                {

                    id: 'Age 16-18',
                    title: "Age 16-18",
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Age 16 to 18',
                    link: '/geometry/16_18_age_maths'

                },
            ]
        },
    },
    {
        page: {
            url_stub: '/statistics',
            description: 'portal to level of maths knowledge in games-coding, depending on age of student',
            sections: [
                {
                    id: 'Age 11-12',
                    title: "Age 11-12",
                    imgSrc: 'public/images/statistics.png',
                    imgAlt: 'Age 11 to 12',
                    link: '/statistics/11_12_age_maths',
                },

                {

                    id: 'Age 12-13',
                    title: "Age 12-13",
                    imgSrc: 'public/images/geometry.jpg',
                    imgAlt: 'Age 12 to 13',
                    link: '/statistics/12_13_age_maths',

                },

                {

                    id: 'Age 13-14',
                    title: "Age 13-14",
                    imgSrc: 'public/images/probability.png',
                    imgAlt: 'Age 13 to 14',
                    link: '/statistics/13_14_age_maths',

                },

                {

                    id: 'Age 14-15',
                    title: "Age 14-15",
                    imgSrc: 'public/images/ratio2.jpg',
                    imgAlt: 'Age 14 to 15',
                    link: '/statistics/14_15_age_maths',

                },

                {

                    id: 'Age 15-16',
                    title: "Age 15-16",
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Age 15 to 16',
                    link: '/statistics/15_16_age_maths',

                },

                {

                    id: 'Age 16-18',
                    title: "Age 16-18",
                    imgSrc: 'public/images/number_image.jpg',
                    imgAlt: 'Age 16 to 18',
                    link: '/statistics/16_18_age_maths'

                },
            ]
        },
    },


    {
        page: {
            url_stub: '/number/11_12_age_maths',
            description: 'games with inbuilt 11 to 12 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/number/11_12_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/number/11_12_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/number/11_12_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/algebra/11_12_age_maths',
            description: 'games with inbuilt 11 to 12 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/algebra/11_12_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/algebra/11_12_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/algebra/11_12_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/ratio/11_12_age_maths',
            description: 'games with inbuilt 11 to 12 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/ratio/11_12_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/ratio/11_12_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/ratio/11_12_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/probability/11_12_age_maths',
            description: 'games with inbuilt 11 to 12 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/probability/11_12_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/probability/11_12_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/probability/11_12_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/geometry/11_12_age_maths',
            description: 'games with inbuilt 11 to 12 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/geometry/11_12_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/geometry/11_12_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/geometry/11_12_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/statistics/11_12_age_maths',
            description: 'games with inbuilt 11 to 12 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/statistics/11_12_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/statistics/11_12_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/statistics/11_12_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/number/12_13_age_maths',
            description: 'games with inbuilt 12 to 13 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/number/12_13_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/number/12_13_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/number/12_13_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/algebra/12_13_age_maths',
            description: 'games with inbuilt 12 to 13 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/algebra/12_13_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/algebra/12_13_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/algebra/12_13_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/ratio/12_13_age_maths',
            description: 'games with inbuilt 12 to 13 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/ratio/12_13_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/ratio/12_13_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/ratio/12_13_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/probability/12_13_age_maths',
            description: 'games with inbuilt 12 to 13 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/probability/12_13_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/probability/12_13_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/probability/12_13_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/geometry/12_13_age_maths',
            description: 'games with inbuilt 12 to 13 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/geometry/12_13_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/geometry/12_13_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/geometry/12_13_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/statistics/12_13_age_maths',
            description: 'games with inbuilt 12 to 13 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/statistics/12_13_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/statistics/12_13_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/statistics/12_13_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/number/13_14_age_maths',
            description: 'games with inbuilt 13 to 14 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/number/13_14_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/number/13_14_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/number/13_14_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/algebra/13_14_age_maths',
            description: 'games with inbuilt 13 to 14 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/algebra/13_14_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/algebra/13_14_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/algebra/13_14_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/ratio/13_14_age_maths',
            description: 'games with inbuilt 13 to 14 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/ratio/13_14_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/ratio/13_14_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/ratio/13_14_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/probability/13_14_age_maths',
            description: 'games with inbuilt 13 to 14 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/probability/13_14_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/probability/13_14_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/probability/13_14_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/geometry/13_14_age_maths',
            description: 'games with inbuilt 13 to 14 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/geometry/13_14_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/geometry/13_14_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/geometry/13_14_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/statistics/13_14_age_maths',
            description: 'games with inbuilt 13 to 14 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/statistics/13_14_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/statistics/13_14_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/statistics/13_14_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/number/14_15_age_maths',
            description: 'games with inbuilt 14 to 15 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/number/14_15_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/number/14_15_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/number/14_15_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/algebra/14_15_age_maths',
            description: 'games with inbuilt 14 to 15 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/algebra/14_15_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/algebra/14_15_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/algebra/14_15_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/ratio/14_15_age_maths',
            description: 'games with inbuilt 14 to 15 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/ratio/14_15_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/ratio/14_15_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/ratio/14_15_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/probability/14_15_age_maths',
            description: 'games with inbuilt 14 to 15 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/probability/14_15_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/probability/14_15_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/probability/14_15_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/geometry/14_15_age_maths',
            description: 'games with inbuilt 14 to 15 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/geometry/14_15_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/geometry/14_15_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/geometry/14_15_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/statistics/14_15_age_maths',
            description: 'games with inbuilt 14 to 15 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/statistics/14_15_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/statistics/14_15_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/statistics/14_15_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/number/15_16_age_maths',
            description: 'games with inbuilt 15 to 16 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/number/15_16_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/number/15_16_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/number/15_16_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/algebra/15_16_age_maths',
            description: 'games with inbuilt 15 to 16 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/algebra/15_16_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/algebra/15_16_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/algebra/15_16_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/ratio/15_16_age_maths',
            description: 'games with inbuilt 15 to 16 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/ratio/15_16_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/ratio/15_16_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/ratio/15_16_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/probability/15_16_age_maths',
            description: 'games with inbuilt 15 to 16 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/probability/15_16_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/probability/15_16_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/probability/15_16_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/geometry/15_16_age_maths',
            description: 'games with inbuilt 15 to 16 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/geometry/15_16_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/geometry/15_16_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/geometry/15_16_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/statistics/15_16_age_maths',
            description: 'games with inbuilt 15 to 16 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/statistics/15_16_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/statistics/15_16_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/statistics/15_16_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/number/16_18_age_maths',
            description: 'games with inbuilt 16 to 18 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/number/16_18_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/number/16_18_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/number/16_18_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/algebra/16_18_age_maths',
            description: 'games with inbuilt 16 to 18 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/algebra/16_18_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/algebra/16_18_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/algebra/16_18_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/ratio/16_18_age_maths',
            description: 'games with inbuilt 16 to 18 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/ratio/16_18_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/ratio/16_18_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/ratio/16_18_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/probability/16_18_age_maths',
            description: 'games with inbuilt 16 to 18 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/probability/16_18_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/probability/16_18_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/probability/16_18_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/geometry/16_18_age_maths',
            description: 'games with inbuilt 16 to 18 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/geometry/16_18_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/geometry/16_18_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/geometry/16_18_age_maths/videoPlayer/water_bucket_Python.js',

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
            url_stub: '/statistics/16_18_age_maths',
            description: 'games with inbuilt 16 to 18 age curriculum maths',
            sections: [
                {

                    id: 'Lemonoids',
                    title: "Lemonoids",
                    imgSrc: 'public/images/games/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link: '/statistics/16_18_age_maths/videoPlayer/lemonoids_coding.js',

                },

                {

                    id: '3D game engine',
                    title: "3D game engine",
                    imgSrc: 'public/images/games/3D_game_engine.jpg',
                    imgAlt: '3D game engine',
                    link: '/statistics/16_18_age_maths/videoPlayer/3D_game_engine_Scratch.js',
                },

                {

                    id: 'water bucket',
                    title: "Water Bucket",
                    imgSrc: 'public/images/games/water_bucket.jpg',
                    imgAlt: 'water bucket',
                    link: '/statistics/16_18_age_maths/videoPlayer/water_bucket_Python.js',

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

const videoData = [
    {
        page: {
            url_stub: '/number/11_12_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: '/public/videos/Ball.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: '/public/images/algebra_image.jfif',
                    imgAlt: 'Lemonoids',
                    link_questions_1: '/maths_questions/angles1.ejs',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/number/12_13_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles2.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/number/13_14_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles3.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/number/14_15_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles4.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],
        },
    },
    {
        page: {
            url_stub: '/number/15_16_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles5.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],

        },
    },
    {
        page: {
            url_stub: '/number/16_18_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/algebra/11_12_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'public/videos/Ball.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/algebra/12_13_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles2.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/algebra/13_14_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles3.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/algebra/14_15_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles4.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],
        },
    },
    {
        page: {
            url_stub: '/algebra/15_16_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles5.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],

        },
    },
    {
        page: {
            url_stub: '/algebra/16_18_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/ratio/11_12_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'public/videos/Ball.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/ratio/12_13_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles2.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/ratio/13_14_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles3.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/ratio/14_15_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles4.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],
        },
    },
    {
        page: {
            url_stub: '/ratio/15_16_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles5.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],

        },
    },
    {
        page: {
            url_stub: '/ratio/16_18_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/probability/11_12_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'public/videos/Ball.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/probability/12_13_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles2.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/probability/13_14_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles3.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/probability/14_15_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles4.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],
        },
    },
    {
        page: {
            url_stub: '/probability/15_16_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles5.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],

        },
    },
    {
        page: {
            url_stub: '/probability/16_18_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },


    {
        page: {
            url_stub: '/geometry/11_12_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'public/videos/Ball.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/geometry/12_13_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles2.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/geometry/13_14_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles3.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/geometry/14_15_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles4.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],
        },
    },
    {
        page: {
            url_stub: '/geometry/15_16_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles5.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],

        },
    },
    {
        page: {
            url_stub: '/geometry/16_18_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },


    {
        page: {
            url_stub: '/statistics/11_12_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'public/videos/Ball.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/algebra_image.jfif',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/statistics/12_13_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles2.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },
    {
        page: {
            url_stub: '/statistics/13_14_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles3.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },

    {
        page: {
            url_stub: '/statistics/14_15_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles4.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],
        },
    },
    {
        page: {
            url_stub: '/statistics/15_16_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles5.html',
                    link_questions_2: null,
                    link_questions_3: null,
                }],

        },
    },
    {
        page: {
            url_stub: '/statistics/16_18_age_maths/videoPlayer/lemonoids_coding.js',
            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
            videoData: [
                {
                    video: 'Lemonoids.mp4',
                    time_stop_1: 10,
                    time_stop_2: null,
                    time_stop_3: null,
                    poster: 'Lemonoids',
                    imgSrc: 'public/images/lemonoids.jpg',
                    imgAlt: 'Lemonoids',
                    link_questions_1: 'maths_questions/angles1.html',
                    link_questions_2: null,
                    link_questions_3: null,
                },
            ],
        },
    },




];


const mathsQuestionsData = [
    {
        page: [
            {
                url_stub: '/maths_questions/angles1.ejs',
                description: '11_12 age range questions on angles',
                questionData: [
                    {
                        Qnumber: 1,
                        imgSrc: 'public/images/11_12_angle_question_1.jpg',
                        imgAlt: '11_12_angle_question_1',
                        questionText: "Which is the correct answer?",
                        answer: 'b',
                    },

                    {
                        Qnumber: 2,
                        imgSrc: 'public/images/11_12_angle_question_2.jpg',
                        imgAlt: '11_12_angle_question_2',
                        questionText: "Which is the correct answer?",
                        answer: 'a',

                    },
                    {
                        Qnumber: 3,
                        imgSrc: 'public/images/11_12_angle_question_3.jpg',
                        imgAlt: '11_12_angle_question_3',
                        questionText: "Which is the correct answer?",
                        answer: 'c',

                    },
                    {
                        Qnumber: 4,
                        imgSrc: 'public/images/11_12_angle_question_4.jpg',
                        imgAlt: '11_12_angle_question_4',
                        questionText: "Which is the correct answer?",
                        answer: 'b',

                    },
                    {
                        Qnumber: 5,
                        imgSrc: 'public/images/11_12_angle_question_5.jpg',
                        imgAlt: '11_12_angle_question_5',
                        questionText: "Which is the correct answer?",
                        answer: 'b',

                    },
                    {
                        Qnumber: 6,
                        imgSrc: 'public/images/11_12_angle_question_6.jpg',
                        imgAlt: '11_12_angle_question_6',
                        questionText: "Which is the correct answer?",
                        answer: 'a',

                    },

                ],
            },
            {
                url_stub: '/maths_questions/angles2',
                description: '12_13 age range questions on angles',
                questionData: [
                    {
                        Qnumber: 1,
                        imgSrc: 'public/images/12_13_angle_question_1.jpg',
                        imgAlt: '12_13_angle_question_1',
                        questionText: "Which is the correct answer?",
                        answer: 'c',
                    },
                    {
                        Qnumber: 2,
                        imgSrc: 'public/images/12_13_angle_question_2.jpg',
                        imgAlt: '12_13_angle_question_2',
                        questionText: "Which is the correct answer?",
                        answer: 'a',

                    },
                    {
                        Qnumber: 3,
                        imgSrc: 'public/images/12_13_angle_question_3.jpg',
                        imgAlt: '12_13_angle_question_3',
                        questionText: "Which is the correct answer?",
                        answer: 'b',

                    },
                    {
                        Qnumber: 4,
                        imgSrc: 'public/images/12_13_angle_question_4.jpg',
                        imgAlt: '12_13_angle_question_4',
                        questionText: "Which is the correct answer?",
                        answer: 'a',

                    },
                    {
                        Qnumber: 5,
                        imgSrc: 'public/images/12_13_angle_question_5.jpg',
                        imgAlt: '12_13_angle_question_5',
                        questionText: "Which is the correct answer?",
                        answer: 'c',

                    },
                    {
                        Qnumber: 6,
                        imgSrc: 'public/images/12_13_angle_question_6.jpg',
                        imgAlt: '12_13_angle_question_6',
                        questionText: "Which is the correct answer?",
                        answer: 'a',

                    },


                ],
            },
            {
                url_stub: '/maths_questions/angles3',
                description: '13_14 age range questions on angles',
                questionData: [
                    {
                        Qnumber: 1,
                        imgSrc: 'public/images/13_14_angle_question_1.jpg',
                        imgAlt: '13_14_angle_question_1',
                        questionText: "Which is the correct answer?",
                        answer: 'c',
                    },
                    {
                        Qnumber: 2,
                        imgSrc: 'public/images/13_14_angle_question_2.jpg',
                        imgAlt: '13_14_angle_question_2',
                        questionText: "Which is the correct answer?",
                        answer: 'b',

                    },
                    {
                        Qnumber: 3,
                        imgSrc: 'public/images/13_14_angle_question_3.jpg',
                        imgAlt: '13_14_angle_question_3',
                        questionText: "Which is the correct answer?",
                        answer: 'a',

                    },
                    {
                        Qnumber: 4,
                        imgSrc: 'public/images/13_14_angle_question_4.jpg',
                        imgAlt: '13_14_angle_question_4',
                        questionText: "Which is the correct answer?",
                        answer: 'c',

                    },
                    {
                        Qnumber: 5,
                        imgSrc: 'public/images/13_14_angle_question_5.jpg',
                        imgAlt: '13_14_angle_question_5',
                        questionText: "Which is the correct answer?",
                        answer: 'b',

                    },
                    {
                        Qnumber: 6,
                        imgSrc: 'public/images/13_14_angle_question_6.jpg',
                        imgAlt: '13_14_angle_question_6',
                        questionText: "Which is the correct answer?",
                        answer: 'a',

                    },

                ],
            },
        ],
    },
];






// Database Connection and Seeding Function
async function seedDatabase() {
    try {
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
        await Layout.insertMany(seedData);
        await Videos.insertMany(videoData);
        await Questions.insertMany(mathsQuestionsData);

        console.log('Data seeding completed.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        // Ensure the database connection is closed
        //       mongoose.connection.close();
        //       console.log('Database connection closed.');
    }
}

// Export the seeding function
module.exports = function (app) {
    // Here you can set up your endpoints, middleware, etc., with the `app` object if necessary
    // e.g., app.get('/api/seed', seedDatabase);

    // For now, we'll just call seedDatabase directly
    seedDatabase();
};
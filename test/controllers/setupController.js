const mongoose = require('mongoose');
const Layout = require('../models/linkedPage');
const Videos = require('../models/videoModel');
const Questions = require('../models/mathQuestionsModel');
const config = require('../config/index');



// Define your layout seed data
const seedData =
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
                link: '/student_age',

            },
            {
                id: 'algebra',
                title: 'Algebra',
                imgSrc: 'public/images/algebra_image.jfif',
                imgAlt: 'Algebra',
                link: '/student_age',
            },
            {
                id: 'ratio',
                title: 'Ratio and Proportion',
                imgSrc: 'public/images/ratio2.jpg',
                imgAlt: 'Ratio and Proportion',
                link: '/student_age',
            },
            {
                id: 'probability',
                title: 'Probability',
                imgSrc: 'public/images/probability.png',
                imgAlt: 'Probability',
                link: '/student_age',
            },
            {
                id: 'geometry',
                title: 'Geometry',
                imgSrc: 'public/images/geometry.jpg',
                imgAlt: 'Geometry',
                link: '/student_age',

            },
            {
                id: 'statistics',
                title: 'Statistics',
                imgSrc: 'public/images/statistics.png',
                imgAlt: 'Statistics',
                link: '/student_age',
            },
        ],
    },
}

//{
//    page: {
//        url_stub: '/student_age',
//        description: 'portal to level of maths knowledge in games-coding, depending on age of student',
//        sections: [
//            {
//                id: 'Age 11-12',
//                title: "Age 11-12",
//                imgSrc: 'public/images/age/age_11_12.jpg',
//                imgAlt: 'Age 11 to 12',
//                link: '/11_12_age_maths',
//            },

//            {

//                id: 'Age 12-13',
//                title: "Age 12-13",
//                imgSrc: 'public/images/age/age_12_13.jpg',
//                imgAlt: 'Age 12 to 13',
//                link: '/12_13_age_maths',

//            },

//            {

//                id: 'Age 13-14',
//                title: "Age 13-14",
//                imgSrc: 'public/images/age/age_13_14.jpg',
//                imgAlt: 'Age 13 to 14',
//                link: '/13_14_age_maths',

//            },

//            {

//                id: 'Age 14-15',
//                title: "Age 14-15",
//                imgSrc: 'public/images/age/age_14_15.jpg',
//                imgAlt: 'Age 14 to 15',
//                link: '/14_15_age_maths',

//            },

//            {

//                id: 'Age 15-16',
//                title: "Age 15-16",
//                imgSrc: 'public/images/age/age_15_16.jpg',
//                imgAlt: 'Age 15 to 16',
//                link: '/15_16_age_maths',

//            },

//            {

//                id: 'Age 16-18',
//                title: "Age 16-18",
//                imgSrc: 'public/images/age/age_16_18.jpg',
//                imgAlt: 'Age 16 to 18',
//                link: '/16_18_age_maths'

//            },


//        ],
//    },
//},
////{
//    page: {
//        url_stub: '/11_12_age_maths',
//        description: 'games with inbuilt 11 to 12 age curriculum maths',
//        sections: [
//            {

//                id: 'Lemonoids',
//                title: "Lemonoids",
//                imgSrc: 'public/images/games/lemonoids.jpg',
//                imgAlt: 'Lemonoids',
//                link: '/videoPlayer/lemonoids_coding.js',

//            },

//            {

//                id: '3D game engine',
//                title: "3D game engine",
//                imgSrc: 'public/images/games/3D_game_engine.jpg',
//                imgAlt: '3D game engine',
//                link: '/videoPlayer/3D_game_engine_Scratch.js',
//            },

//            {

//                id: 'water bucket',
//                title: "Water Bucket",
//                imgSrc: 'public/images/games/water_bucket.jpg',
//                imgAlt: 'water bucket',
//                link: '/videoPlayer/water_bucket_Python.js',

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },
//        ],
//    },
//},
//{
//    page: {
//        url_stub: '/12_13_age_maths',
//        description: 'games with inbuilt 12 to 13 age curriculum maths',
//        sections: [
//            {

//                id: 'Lemonoids',
//                title: "Lemonoids",
//                imgSrc: 'public/images/games/lemonoids.jpg',
//                imgAlt: 'Lemonoids',
//                link: '/videoPlayer/lemonoids_coding.js',

//            },

//            {

//                id: '3D game engine',
//                title: "3D game engine",
//                imgSrc: 'public/images/games/3D_game_engine.jpg',
//                imgAlt: '3D game engine',
//                link: '/videoPlayer/3D_game_engine_Scratch.js',
//            },

//            {

//                id: 'water bucket',
//                title: "Water Bucket",
//                imgSrc: 'public/images/games/water_bucket.jpg',
//                imgAlt: 'water bucket',
//                link: '/videoPlayer/water_bucket_Python.js',

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },
//        ],
//    },
//},
//{
//    page: {
//        url_stub: '/13_14_age_maths',
//        description: 'games with inbuilt 13 to 14 age curriculum maths',
//        sections: [
//            {

//                id: 'Lemonoids',
//                title: "Lemonoids",
//                imgSrc: 'public/images/games/lemonoids.jpg',
//                imgAlt: 'Lemonoids',
//                link: '/videoPlayer/lemonoids_coding.js',

//            },

//            {

//                id: '3D game engine',
//                title: "3D game engine",
//                imgSrc: 'public/images/games/3D_game_engine.jpg',
//                imgAlt: '3D game engine',
//                link: '/videoPlayer/3D_game_engine_Scratch.js',
//            },

//            {

//                id: 'water bucket',
//                title: "Water Bucket",
//                imgSrc: 'public/images/games/water_bucket.jpg',
//                imgAlt: 'water bucket',
//                link: '/videoPlayer/water_bucket_Python.js',

//            },

//    {

//        id: null,
//        title: null,
//        imgSrc: null,
//        imgAlt: null,
//        link: null,

//    },

//    {

//        id: null,
//        title: null,
//        imgSrc: null,
//        imgAlt: null,
//        link: null,

//    },

//    {

//        id: null,
//        title: null,
//        imgSrc: null,
//        imgAlt: null,
//        link: null,

//    },
//        ],
//    },
//},
////{
//    page: {
//        url_stub: '/14_15_age_maths',
//        description: 'games with inbuilt 14 to 15 age curriculum maths',
//        sections: [
//            {

//                id: 'Lemonoids',
//                title: "Lemonoids",
//                imgSrc: 'public/images/games/lemonoids.jpg',
//                imgAlt: 'Lemonoids',
//                link: '/videoPlayer/lemonoids_coding.js',

//            },

//            {

//                id: '3D game engine',
//                title: "3D game engine",
//                imgSrc: 'public/images/games/3D_game_engine.jpg',
//                imgAlt: '3D game engine',
//                link: '/videoPlayer/3D_game_engine_Scratch.js',
//            },

//            {

//                id: 'water bucket',
//                title: "Water Bucket",
//                imgSrc: 'public/images/games/water_bucket.jpg',
//                imgAlt: 'water bucket',
//                link: '/videoPlayer/water_bucket_Python.js',

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },
//        ],
//    },
//},

//{
//    page: {
//        url_stub: '/15_16_age_maths',
//        description: 'games with inbuilt 15 to 16 age curriculum maths',
//        sections: [
//            {

//                id: 'Lemonoids',
//                title: "Lemonoids",
//                imgSrc: 'public/images/games/lemonoids.jpg',
//                imgAlt: 'Lemonoids',
//                link: '/videoPlayer/lemonoids_coding.js',

//            },

//            {

//                id: '3D game engine',
//                title: "3D game engine",
//                imgSrc: 'public/images/games/3D_game_engine.jpg',
//                imgAlt: '3D game engine',
//                link: '/videoPlayer/3D_game_engine_Scratch.js',
//            },

//            {

//                id: 'water bucket',
//                title: "Water Bucket",
//                imgSrc: 'public/images/games/water_bucket.jpg',
//                imgAlt: 'water bucket',
//                link: '/videoPlayer/water_bucket_Python.js',

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },
//        ],
//    },
//},

//{
//    page: {
//        url_stub: '/16_18_age_maths',
//        description: 'games with inbuilt 16 to 18 age curriculum maths',
//        sections: [
//            {

//                id: 'Lemonoids',
//                title: "Lemonoids",
//                imgSrc: 'public/images/games/lemonoids.jpg',
//                imgAlt: 'Lemonoids',
//                link: '/videoPlayer/lemonoids_coding.js',

//            },

//            {

//                id: '3D game engine',
//                title: "3D game engine",
//                imgSrc: 'public/images/games/3D_game_engine.jpg',
//                imgAlt: '3D game engine',
//                link: '/videoPlayer/3D_game_engine_Scratch.js',
//            },

//            {

//                id: 'water bucket',
//                title: "Water Bucket",
//                imgSrc: 'public/images/games/water_bucket.jpg',
//                imgAlt: 'water bucket',
//                link: '/videoPlayer/water_bucket_Python.js',

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },

//            {

//                id: null,
//                title: null,
//                imgSrc: null,
//                imgAlt: null,
//                link: null,

//            },
//        ],
//    },
//  },


//];



//const videoData = [
//    {
//        page: {
//            url_stub: '/11_12_age_maths/videoPlayer/lemonoids_coding.js',
//            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
//            videoData: [
//                {
//                    video: 'Lemonoids.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'Lemonoids',
//                    imgSrc: 'public/images/lemonoids.jpg',
//                    imgAlt: 'Lemonoids',
//                    link_questions_1: 'maths_questions/angles1.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/12_13_age_maths/videoPlayer/lemonoids_coding.js',
//            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
//            videoData: [
//                {
//                    video: 'Lemonoids.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'Lemonoids',
//                    imgSrc: 'public/images/lemonoids.jpg',
//                    imgAlt: 'Lemonoids',
//                    link_questions_1: 'maths_questions/angles2.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/13_14_age_maths/videoPlayer/lemonoids_coding.js',
//            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
//            videoData: [
//                {
//                    video: 'Lemonoids.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'Lemonoids',
//                    imgSrc: 'public/images/lemonoids.jpg',
//                    imgAlt: 'Lemonoids',
//                    link_questions_1: 'maths_questions/angles3.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/14_15_age_maths/videoPlayer/lemonoids_coding.js',
//            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
//            videoData: [
//                {
//                    video: 'Lemonoids.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'Lemonoids',
//                    imgSrc: 'public/images/lemonoids.jpg',
//                    imgAlt: 'Lemonoids',
//                    link_questions_1: 'maths_questions/angles4.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/15_16_age_maths/videoPlayer/lemonoids_coding.js',
//            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
//            videoData: [
//                {
//                    video: 'Lemonoids.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'Lemonoids',
//                    imgSrc: 'public/images/lemonoids.jpg',
//                    imgAlt: 'Lemonoids',
//                    link_questions_1: 'maths_questions/angles5.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/16_18_age_maths/videoPlayer/lemonoids_coding.js',
//            description: 'Lemonoids; a game of space shoot-them-up in Scratch',
//            videoData: [
//                {
//                    video: 'Lemonoids.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'Lemonoids',
//                    imgSrc: 'public/images/lemonoids.jpg',
//                    imgAlt: 'Lemonoids',
//                    link_questions_1: 'maths_questions/angles1.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                },
//            ],
//        },


//        page: {

//            url_stub: '/11_12_age_maths/videoPlayer/3D_game_engine_Scratch.js',
//            description: 'games with inbuilt 11 to 12 age curriculum maths',
//            videoData: [

//                {
//                    video: '3D_game_engine.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: '3D_game_engine',
//                    imgSrc: 'public/images/3D_game_engine.jpg',
//                    imgAlt: '3D_game_engine',
//                    link_questions_1: 'maths_questions/ratio1.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/12_13_age_maths/videoPlayer/3D_game_engine_Scratch.js',
//            description: 'games with inbuilt 12 to 13 age curriculum maths',
//            videoData: [

//                {
//                    video: '3D_game_engine.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: '3D_game_engine',
//                    imgSrc: 'public/images/3D_game_engine.jpg',
//                    imgAlt: '3D_game_engine',
//                    link_questions_1: 'maths_questions/ratio2.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/13_14_age_maths/videoPlayer/3D_game_engine_Scratch.js',
//            description: 'games with inbuilt 13 to 14 age curriculum maths',
//            videoData: [

//                {
//                    video: '3D_game_engine.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: '3D_game_engine',
//                    imgSrc: 'public/images/3D_game_engine.jpg',
//                    imgAlt: '3D_game_engine',
//                    link_questions_1: 'maths_questions/ratio3.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/14_15_age_maths/videoPlayer/3D_game_engine_Scratch.js',
//            description: 'games with inbuilt 14 to 15 age curriculum maths',
//            videoData: [

//                {
//                    video: '3D_game_engine.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: '3D_game_engine',
//                    imgSrc: 'public/images/3D_game_engine.jpg',
//                    imgAlt: '3D_game_engine',
//                    link_questions_1: 'maths_questions/ratio4.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/15_16_age_maths/videoPlayer/3D_game_engine_Scratch.js',
//            description: 'games with inbuilt 15 to 16 age curriculum maths',
//            videoData: [

//                {
//                    video: '3D_game_engine.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: '3D_game_engine',
//                    imgSrc: 'public/images/3D_game_engine.jpg',
//                    imgAlt: '3D_game_engine',
//                    link_questions_1: 'maths_questions/ratio5.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/16_18_age_maths/videoPlayer/3D_game_engine_Scratch.js',
//            description: 'games with inbuilt 16 to 18 age curriculum maths',
//            videoData: [

//                {
//                    video: '3D_game_engine.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: '3D_game_engine',
//                    imgSrc: 'public/images/3D_game_engine.jpg',
//                    imgAlt: '3D_game_engine',
//                    link_questions_1: 'maths_questions/ratio6.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],
//        },

//    },
//    {
//        page: {
//            url_stub: '/11_12_age_maths/videoPlayer/water_bucket_Python.js',
//            description: 'Python console maths riddle',
//            videoData: [
//                {
//                    video: 'water_bucket.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'water_bucket',
//                    imgSrc: 'public/images/water_bucket.jpg',
//                    imgAlt: 'water_bucket',
//                    link_questions_1: 'maths_questions/numberline1.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/12_13_age_maths/videoPlayer/water_bucket_Python.js',
//            description: 'Python console maths riddle',
//            videoData: [
//                {
//                    video: 'water_bucket.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'water_bucket',
//                    imgSrc: 'public/images/water_bucket.jpg',
//                    imgAlt: 'water_bucket',
//                    link_questions_1: 'maths_questions/numberline2.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/13_14_age_maths/videoPlayer/water_bucket_Python.js',
//            description: 'Python console maths riddle',
//            videoData: [
//                {
//                    video: 'water_bucket.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'water_bucket',
//                    imgSrc: 'public/images/water_bucket.jpg',
//                    imgAlt: 'water_bucket',
//                    link_questions_1: 'maths_questions/numberline3.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/14_15_age_maths/videoPlayer/water_bucket_Python.js',
//            description: 'Python console maths riddle',
//            videoData: [
//                {
//                    video: 'water_bucket.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'water_bucket',
//                    imgSrc: 'public/images/water_bucket.jpg',
//                    imgAlt: 'water_bucket',
//                    link_questions_1: 'maths_questions/numberline4.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/15_16_age_maths/videoPlayer/water_bucket_Python.js',
//            description: 'Python console maths riddle',
//            videoData: [
//                {
//                    video: 'water_bucket.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'water_bucket',
//                    imgSrc: 'public/images/water_bucket.jpg',
//                    imgAlt: 'water_bucket',
//                    link_questions_1: 'maths_questions/numberline5.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],

//            url_stub: '/16_18_age_maths/videoPlayer/water_bucket_Python.js',
//            description: 'Python console maths riddle',
//            videoData: [
//                {
//                    video: 'water_bucket.mp4',
//                    time_stop_1: '10',
//                    time_stop_2: null,
//                    time_stop_3: null,
//                    poster: 'water_bucket',
//                    imgSrc: 'public/images/water_bucket.jpg',
//                    imgAlt: 'water_bucket',
//                    link_questions_1: 'maths_questions/numberline6.html',
//                    link_questions_2: null,
//                    link_questions_3: null,
//                }],
//        },
//    },
//];


//const mathsQuestionsData = [
//    {
//        page: {
//            url_stub: 'maths_questions/angles1',
//            description: '11_12 age range questions on angles',
//            questionData: [
//                {
//                    Qnumber: 1,
//                    imgSrc: 'public/images/11_12_angle_question_1.jpg',
//                    imgAlt: '11_12_angle_question_1',
//                    questionText: "Which is the correct answer?",
//                    answer: 'b',

//                },
//                {
//                    Qnumber: 2,
//                    imgSrc: 'public/images/11_12_angle_question_2.jpg',
//                    imgAlt: '11_12_angle_question_2',
//                    questionText: "Which is the correct answer?",
//                    answer: 'a',

//                },
//                {
//                    Qnumber: 3,
//                    imgSrc: 'public/images/11_12_angle_question_3.jpg',
//                    imgAlt: '11_12_angle_question_3',
//                    questionText: "Which is the correct answer?",
//                    answer: 'c',

//                },
//                {
//                    Qnumber: 4,
//                    imgSrc: 'public/images/11_12_angle_question_4.jpg',
//                    imgAlt: '11_12_angle_question_4',
//                    questionText: "Which is the correct answer?",
//                    answer: 'b',

//                },
//                {
//                    Qnumber: 5,
//                    imgSrc: 'public/images/11_12_angle_question_5.jpg',
//                    imgAlt: '11_12_angle_question_5',
//                    questionText: "Which is the correct answer?",
//                    answer: 'b',

//                },
//                {
//                    Qnumber: 6,
//                    imgSrc: 'public/images/11_12_angle_question_6.jpg',
//                    imgAlt: '11_12_angle_question_6',
//                    questionText: "Which is the correct answer?",
//                    answer: 'a',

//                },


//            ],
//        },

//        page: {
//            url_stub: 'maths_questions/angles2',
//            description: '12_13 age range questions on angles',
//            questionData: [
//                {
//                    Qnumber: 1,
//                    imgSrc: 'public/images/12_13_angle_question_1.jpg',
//                    imgAlt: '12_13_angle_question_1',
//                    questionText: "Which is the correct answer?",
//                    answer: 'c',

//                },
//                {
//                    Qnumber: 2,
//                    imgSrc: 'public/images/12_13_angle_question_2.jpg',
//                    imgAlt: '12_13_angle_question_2',
//                    questionText: "Which is the correct answer?",
//                    answer: 'a',

//                },
//                {
//                    Qnumber: 3,
//                    imgSrc: 'public/images/12_13_angle_question_3.jpg',
//                    imgAlt: '12_13_angle_question_3',
//                    questionText: "Which is the correct answer?",
//                    answer: 'b',

//                },
//                {
//                    Qnumber: 4,
//                    imgSrc: 'public/images/12_13_angle_question_4.jpg',
//                    imgAlt: '12_13_angle_question_4',
//                    questionText: "Which is the correct answer?",
//                    answer: 'a',

//                },
//                {
//                    Qnumber: 5,
//                    imgSrc: 'public/images/12_13_angle_question_5.jpg',
//                    imgAlt: '12_13_angle_question_5',
//                    questionText: "Which is the correct answer?",
//                    answer: 'c',

//                },
//                {
//                    Qnumber: 6,
//                    imgSrc: 'public/images/12_13_angle_question_6.jpg',
//                    imgAlt: '12_13_angle_question_6',
//                    questionText: "Which is the correct answer?",
//                    answer: 'a',

//                },


//            ],
//        },

//        page: {
//            url_stub: 'maths_questions/angles1',
//            description: '13_14 age range questions on angles',
//            questionData: [
//                {
//                    Qnumber: 1,
//                    imgSrc: 'public/images/13_14_angle_question_1.jpg',
//                    imgAlt: '13_14_angle_question_1',
//                    questionText: "Which is the correct answer?",
//                    answer: 'c',

//                },
//                {
//                    Qnumber: 2,
//                    imgSrc: 'public/images/13_14_angle_question_2.jpg',
//                    imgAlt: '13_14_angle_question_2',
//                    questionText: "Which is the correct answer?",
//                    answer: 'b',

//                },
//                {
//                    Qnumber: 3,
//                    imgSrc: 'public/images/13_14_angle_question_3.jpg',
//                    imgAlt: '13_14_angle_question_3',
//                    questionText: "Which is the correct answer?",
//                    answer: 'a',

//                },
//                {
//                    Qnumber: 4,
//                    imgSrc: 'public/images/13_14_angle_question_4.jpg',
//                    imgAlt: '13_14_angle_question_4',
//                    questionText: "Which is the correct answer?",
//                    answer: 'c',

//                },
//                {
//                    Qnumber: 5,
//                    imgSrc: 'public/images/13_14_angle_question_5.jpg',
//                    imgAlt: '13_14_angle_question_5',
//                    questionText: "Which is the correct answer?",
//                    answer: 'b',

//                },
//                {
//                    Qnumber: 6,
//                    imgSrc: 'public/images/13_14_angle_question_6.jpg',
//                    imgAlt: '13_14_angle_question_6',
//                    questionText: "Which is the correct answer?",
//                    answer: 'a',

//                },

//            ],
//        },
//    },


//];



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
        //        await Videos.deleteMany({});
        //        await Questions.deleteMany({});

        // Seed new data
        await Layout.insertMany(seedData);
        //       await Videos.insertMany(videoData);
        //       await Questions.insertMany(mathsQuestionsData);

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
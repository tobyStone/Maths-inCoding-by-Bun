var pageLayout = require('../models/linkedPage');


module.exports = function(app){

        app.get('/test/set_up_pages', function(req, res) {

                // add to database

            var pages = [
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

                }
                ];
                pageLayout.create(pageLayout, function (err, results){
                    console.log(pageLayout);     
                        res.send(results);
                });
    
          

        });

    
        


}
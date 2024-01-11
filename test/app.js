const express = require('express');
const app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./apiController');



const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('/home/test/views/structureEJS.ejs');
});

app.use('/public', express.static(__dirname + '/public'));
// Define routes for other pages, using their respective EJS templates

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
'use strict';

console.log('Hello world');


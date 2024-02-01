const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');
//const cors = require('cors');



const port = 3000;

// CORS configuration
//const corsOptions = {
//    origin: 'http://localhost:' + port, // or simply true to allow all localhost requests
//    methods: 'GET' // Adjust methods as needed, GET is common for serving files
//};


app.set('view engine', 'ejs');

//app.use(cors(corsOptions));

app.use('/public', express.static(__dirname + '/public'));
// Define routes for other pages, using their respective EJS templates.


// Serve video files from the Windows filesystem
//app.use('/videos', express.static('/mnt/c/Videos'));

mongoose.connect(config.getDbConnectionString(), {
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    setupController(app);
    apiController(app);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
'use strict';

console.log('Hello world');


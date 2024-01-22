const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');



const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('structureEJS.ejs');
});

app.use('/public', express.static(__dirname + '/public'));
// Define routes for other pages, using their respective EJS templates.

mongoose.connect(config.getDbConnectionString(){
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
setupController(app);
apiController(app);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
'use strict';

console.log('Hello world');


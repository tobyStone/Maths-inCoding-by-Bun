const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const PORT = 3000;
const HOST = '0.0.0.0';

app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

mongoose.connect(config.getDbConnectionString(), {
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    setupController(app);
    apiController(app);
});

app.listen(PORT, HOST, () => console.log('server running'));

console.log('Hello world');

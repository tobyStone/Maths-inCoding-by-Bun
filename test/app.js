const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('/home/test/views/structure.ejs');
});

app.use('/public', express.static(__dirname + '/public'));
// Define routes for other pages, using their respective EJS templates

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
'use strict';

console.log('Hello world');


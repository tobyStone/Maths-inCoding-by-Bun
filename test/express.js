const express = require('express');
const path = require('path');
const app = express();

// Serve static assets from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for your HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// JavaScript source code

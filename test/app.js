const express = require('express');
const config = require('./config');
const { init } = require('./controllers/setupController');
const apiController = require('./controllers/apiController');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

console.log("Hello. In app.js")
console.log("DIRNAME: ", __dirname)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..','test', 'views'));

app.use('/public', express.static(__dirname + '/public'));

// SSL options
const options = {
    key: fs.readFileSync('./ssl certificate/key.pem'),
    cert: fs.readFileSync('./ssl certificate/cert.pem')
};

// Initialize controllers and connect to DB
(async () => {
    await init(app);

    apiController(app);

    // Start the server only if not in test mode
    if (process.env.NODE_ENV !== 'test') {
        // Create an HTTPS server and pass the Express app as the handler
        const httpsServer = https.createServer(options, app);

        httpsServer.listen(PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`));
    }
})();

console.log('Hello world');

// Handle the SIGINT event to gracefully shut down the server
process.on('SIGINT', function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl+C)");
    // Stop accepting new connections
    server.close(async () => {
        console.log("Closed out remaining connections.");
        // Disconnect from the database
        await mongoose.disconnect();
        console.log("Disconnected from database.");
        process.exit(0);
    });

    // If server hasn't finished in 10 seconds, shut down process forcibly
    setTimeout(() => {
        console.error("Could not close connections in time, forcefully shutting down");
        process.exit(1);
    }, 10000);
});

module.exports = app;

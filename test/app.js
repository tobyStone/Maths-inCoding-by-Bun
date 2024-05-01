////const express = require('express');
////const config = require('./config');
////const { init } = require('./controllers/setupController');
////const apiController = require('./controllers/apiController');
////const https = require('https');
////const fs = require('fs');

////const app = express();
////const PORT = process.env.PORT || 3000;
////const HOST = '0.0.0.0';

////app.set('view engine', 'ejs');
////app.use('/', express.static(__dirname + '/public'));

////// SSL options
////const options = {
////    key: fs.readFileSync('./ssl certificate/key.pem'),
////    cert: fs.readFileSync('./ssl certificate/cert.pem')
////};
//////
////// Initialize controllers and connect to DB
////(async () => {
////    await init(app);

////    apiController(app);

////    // Start the server only if not in test mode
////    //if (process.env.NODE_ENV !== 'test') {
////    //    // Create an HTTPS server and pass the Express app as the handler
////    //    const httpsServer = https.createServer(options, app);

////    //    httpsServer.listen(PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`));
////    //}
////    app.listen(port, () => {
////        console.log(`App listening at http://localhost:${port}`);
////    });
////})();

////console.log('Hello world');

////app.get("/testing", (req, res) => {
////    res.send("Hello World!");
////});

////// Handle the SIGINT event to gracefully shut down the server
////process.on('SIGINT', function () {
////    console.log("\nGracefully shutting down from SIGINT (Ctrl+C)");
////    // Stop accepting new connections
////    server.close(async () => {
////        console.log("Closed out remaining connections.");
////        // Disconnect from the database
////        await mongoose.disconnect();
////        console.log("Disconnected from database.");
////        process.exit(0);
////    });

////    // If server hasn't finished in 10 seconds, shut down process forcibly
////    setTimeout(() => {
////        console.error("Could not close connections in time, forcefully shutting down");
////        process.exit(1);
////    }, 10000);
////});

////module.exports = app;

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

# Maths-inCoding-by-Bun
using Bun to bundle Maths inCoding website and NodeJS/Express server


![](https://github.com/tobyStone/Maths-inCoding-by-Bun/blob/main/gif_folder/landing_page.PNG)



Setting up:

1) Clone this repository
2) There are files for config, index and index_test. These link to a MongoDB NoSQL database. They are incomplete for security reasons. The strings for username and password in config.json are empty. The index files for production and test databases have empty strings for the clusters used. Please fill these strings with the details for your own NoSQL database. The ssl certificate files (cert.pem and key.pem) are also empty. Please fill these with the details of your own secure socket layer certificate.
3) Install node from https://nodejs.org/en/download. 
4) Download the bun version you want to use (Linux/Windows) from https://bun.sh/
5) When both are downloaded, navigate using a terminal to the cloned folder and type 'bun install'. It will need to access package.json in order to load the dependencies for this project.
6) Type 'bun run dev' to run tests and website on localhost 3000.
7) Please let me know if any of this doesn't work. Feedback in general would be very much appreciated. 

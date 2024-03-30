const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

describe('Video Player View', function () {
    this.timeout(30000);
    let expect, selectedVideoPage, chai, videoData, ejsVideoTemplatePath;

    before(async function () {
        const chai = await import('chai');
        expect = chai.expect;

        // Construct the path to the videoData.json
        const projectRoot = path.join(__dirname, '..'); // Adjust if the folder structure is different.
        const jsonVideoFilePath = path.join(projectRoot, 'controllers', 'seeds', 'videoData.json');

        // Read and parse the videoData.json file
        try {
            const rawData = fs.readFileSync(jsonVideoFilePath, 'utf8');
            videoData = JSON.parse(rawData);
        } catch (error) {
            console.error("Error reading or parsing videoData.json file:", error);
            throw error;
        }

        // Select a random video page from the loaded data
        const videoPageIndex = Math.floor(Math.random() * videoData.length);
        selectedVideoPage = videoData[videoPageIndex];

        // Set the path to the EJS template
        ejsVideoTemplatePath = path.join(projectRoot, 'views', 'VideoPlayer.ejs');
    });

    it('should render the video player with the correct data', async function () {
        const html = await new Promise((resolve, reject) => {
            ejs.renderFile(ejsVideoTemplatePath, {
                page: selectedVideoPage.page // Pass the video data to the template
            }, {}, (err, str) => {
                if (err) reject(err);
                else resolve(str);
            });
        }).catch(error => {
            console.error('Error rendering EJS template:', error);
            throw error;
        });

        console.log(html)

        // Assertions to check if the video player is rendered correctly
        try {
            expect(html).to.match(/<h1[^>]*>Maths inCoding.*?<\/h1>/s);
            expect(html).to.contain(selectedVideoPage.page.videoData[0].video);
            expect(html).to.contain(selectedVideoPage.page.videoData[0].imgSrc);
        } catch (error) {
            throw error;
        }
    });

});

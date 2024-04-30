const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

describe('Layout View', function () {
    this.timeout(30000); // Adjust timeout as necessary for your tests

    let ejsTemplatePath;

    let layoutData = []

    before(async function () {

        const chai = await import('chai');
        expect = chai.expect;

        // Split the __dirname into parts
        let pathParts = __dirname.split(path.sep);

        // Remove the 'test' directory from the array of path parts
        pathParts = pathParts.filter(part => part !== 'test');

        // Re-join the path parts into a directory path
        const projectRoot = pathParts.join(path.sep);


        // Define the path to your EJS template
        ejsTemplatePath = path.join(projectRoot, 'views', 'structureEJS.ejs');

        // Define the path to your JSON data
        const jsonFilePath = path.join(projectRoot, 'controllers', 'seeds', 'layoutData.json');

        // Read and parse the JSON file
        try {

            const data = fs.readFileSync(jsonFilePath, 'utf8');
            // Adding a check to ensure the data is not empty
            if (data) {
                layoutData = JSON.parse(data);
            } else {
                console.error("The JSON file is empty.");
            }
        } catch (error) {
            console.error("Error reading or parsing JSON file:", error);
            // Inspect additional properties of the error object
            console.error("Error code:", error.code);
            console.error("Error stack:", error.stack);

        }
    });

    it('should render the layout with the correct data', async function () {
        // Test each page in your layoutData

        for (const pageData of layoutData) {
            const html = await ejs.renderFile(ejsTemplatePath, {
                page: pageData.page, // Pass the page data to your EJS template
                clearVideoFlags: true // This could be a condition you check for before passing
            });


            // Test that the HTML contains the correct sections
            try {
                // Test for the presence of a div with the 'content-container' class
                expect(html).to.match(/<div class="content-container">/s);

                // Loop through each section in the pageData, skipping those with null id
                (pageData.page.sections || []).forEach(section => {
                    if (section.id) {
                        // Test for the presence of each section by its id
                        expect(html).to.match(new RegExp(`<section class="math-section" id="${section.id}">`, 'i'));

                        // If the imgSrc and link are not null, test for their presence
                        if (section.imgSrc && section.link) {
                            const imgRegex = new RegExp(`<img id="${section.id}_img" class="imgToHover" src="${section.imgSrc}" alt="${section.imgAlt}"\\s*/?>`, 'i');
                            expect(html).to.match(imgRegex);

                            const linkRegex = new RegExp(`<a href="${section.link}"[^>]*>`, 'i');
                            expect(html).to.match(linkRegex);
                        }
                    }
                });

                //                console.log(`Page ${pageData.page.url_stub} passed the tests.`);
            } catch (error) {
                // If an assertion fails, log the error and the failing page
                console.error(`Test failed for page ${pageData.page.url_stub}:`, error);
                throw error;
            }
        }
    });
});
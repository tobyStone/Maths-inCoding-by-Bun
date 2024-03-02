const path = require('path');
const ejs = require('ejs');
const fs = require('fs');


describe('Math Questions View', function () {
    this.timeout(30000); // Increase timeout if necessary, as database operations can take time
    let expect, selectedPage, chai, chaiHttp, jsonFilePath, mathQuestionData, ejsTemplatePath;

    before(async function () {
        const chai = await import('chai');
        expect = chai.expect;

        // Split the __dirname into parts
        let pathParts = __dirname.split(path.sep);

        // Remove the 'test' directory from the array of path parts
        pathParts = pathParts.filter(part => part !== 'test');

        // Re-join the path parts into a directory path
        const projectRoot = pathParts.join(path.sep);

        ejsTemplatePath = path.join(projectRoot, 'views', 'maths_questions.ejs'); // Update this path as needed.


        console.log("Project Root: ", projectRoot, "ejs path: ", ejsTemplatePath);

        // Now construct the correct path to the JSON file
        const jsonFilePath = path.join(projectRoot, 'controllers', 'seeds', 'mathsQuestionData.json');

        console.log("JSON File Path: ", jsonFilePath);

        // Read and parse the JSON file
        let mathQuestionData;
        try {
            const data = fs.readFileSync(jsonFilePath, 'utf8');
            mathQuestionData = JSON.parse(data);
        } catch (error) {
            console.error("Error reading or parsing JSON file:", error);
            throw error;
        }

        // Select a random page from the loaded data
        const pageIndex = Math.floor(Math.random() * mathQuestionData.length);
        selectedPage = mathQuestionData[pageIndex].page;
    });

    it('should render the maths questions with the correct data', async function () {


        // `jsonFilePath` will now be accessible here as well
        const html = await new Promise((resolve, reject) => {
            ejs.renderFile(ejsTemplatePath, {
                questionData: selectedPage.questionData, // Make sure to use selectedPage
                helpVideo: selectedPage.helpVideo // Make sure to use selectedPage
            }, {}, (err, str) => {
                if (err) reject(err);
                else resolve(str);
            });
        }).catch(error => {
            // Handle any error that occurred during rendering
            console.error('Error rendering EJS template:', error);
            throw error; // Rethrow the error to be caught by the try/catch block
        });

        console.log("HTML: ", html);
        // Now you can use try/catch to handle assertions
        try {
            // Check for the presence of the h1 tag with "Maths inCoding" and the image for the logo
            // The regex has been adjusted to account for potential attributes and whitespace within the h1 tag
            expect(html).to.match(/<h1[^>]*>Maths inCoding.*?<\/h1>/s);

            console.log("Selected Page json: ", selectedPage)

            // Loop through each question in the pageData object
            selectedPage.questionData.forEach(question => {
                // Adjust the imgSrc value to match the expected src attribute in the rendered HTML
                // Here, if the original imgSrc in the JSON doesn't start with '/public', we prepend it
                const expectedSrc = question.imgSrc.replace('public', '/public');

                // Construct a regex pattern that describes the expected HTML for the image tag
                // \s+ matches one or more whitespace characters
                // The src, alt, width, and height attributes are matched exactly as they are expected to be in the HTML
                // The pattern is flexible enough to match additional whitespace or different attribute order
                // The \s* matches any amount of whitespace, including none
                // The /? allows for self-closing tags (which may or may not have a slash before the closing angle bracket)
                const regexPattern = `<img\\s+src="${expectedSrc}"\\s+alt="${question.imgAlt}"\\s+width="525"\\s+height="350"\\s*/?>`;

                // Create a new RegExp object using the pattern and the 'i' flag to make the regex case-insensitive
                const regex = new RegExp(regexPattern, 'i');

                // Use Chai's expect method to assert that the rendered HTML matches the regex pattern
                // If the pattern is not found in the HTML, the test will fail and output the specified message
                expect(html).to.match(regex, `Question number ${question.Qnumber} img tag does not match.`);
            });


        } catch (error) {
            // If an assertion fails, throw the error
            throw error;
        }
    });
});

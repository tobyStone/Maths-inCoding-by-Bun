const path = require('path');
const ejs = require('ejs');


const pageData = {
    page: {
        url_stub: "/maths_questions/angles1",
        description: "11_12 age range questions on angles",
        helpVideo: {
            videoSrc: "/public/videos/HelpWithAngles.mp4",
            imgSrc: "/public/images/help_video_poster.png",
            videoTitle: "Understanding Angles"
        },
        questionData: [
            {
                "Qnumber": 1,
                "imgSrc": "public/images/question_images/angle_question_1.png",
                "imgAlt": "11_12_angle_question_1",
                "questionText": "Which is the correct answer?",
                "answer": "a",
                "choices": ["a", "b", "c", "d"]
            },
            {
                "Qnumber": 2,
                "imgSrc": "public/images/question_images/angle_question_2.png",
                "imgAlt": "11_12_angle_question_2",
                "questionText": "Which is the correct answer?",
                "answer": "d",
                "choices": ["a", "b", "c", "d"]
            },
            {
                "Qnumber": 3,
                "imgSrc": "public/images/question_images/angle_question_3.png",
                "imgAlt": "11_12_angle_question_3",
                "questionText": "Which is the correct answer?",
                "answer": "b",
                "choices": ["a", "b", "c", "d"]
            },
            {
                "Qnumber": 4,
                "imgSrc": "public/images/question_images/angle_question_4.png",
                "imgAlt": "11_12_angle_question_4",
                "questionText": "Which is the correct answer?",
                "answer": "c",
                "choices": ["a", "b", "c", "d"]
            },
            {
                "Qnumber": 5,
                "imgSrc": "public/images/question_images/angle_question_5.png",
                "imgAlt": "11_12_angle_question_5",
                "questionText": "Which is the correct answer?",
                "answer": "d",
                "choices": ["a", "b", "c", "d"]
            },
            {
                "Qnumber": 6,
                "imgSrc": "public/images/question_images/angle_question_6.png",
                "imgAlt": "11_12_angle_question_6",
                "questionText": "Which is the correct answer?",
                "answer": "d",
                "choices": ["a", "b", "c", "d"]
            }
        ]
    }
};




describe('Math Questions View', function () {
    this.timeout(30000); // Increase timeout if necessary, as database operations can take time
    let expect, chai, chaiHttp;

    before(async function () {
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should render the maths questions with the correct data', async function () {
        // Path to your EJS file
        const filePath = path.join(__dirname, '../views', 'maths_questions.ejs'); // Ensure the path is correct
        // Use a promise to await the ejs.renderFile function
        const html = await new Promise((resolve, reject) => {
            ejs.renderFile(filePath, {
                questionData: pageData.page.questionData,
                helpVideo: pageData.page.helpVideo
            }, {}, (err, str) => {
                if (err) reject(err);
                else resolve(str);
            });
        }).catch(error => {
            // Handle any error that occurred during rendering
            console.error('Error rendering EJS template:', error);
            throw error; // Rethrow the error to be caught by the try/catch block
        });
        console.log("HTML: ", html)
        // Now you can use try/catch to handle assertions
        try {
            // Check for the presence of the h1 tag with "Maths inCoding" and the image for the logo
            // The regex has been adjusted to account for potential attributes and whitespace within the h1 tag
            expect(html).to.match(/<h1[^>]*>Maths inCoding.*?<\/h1>/s);

            // Loop through each question in the pageData object
            pageData.page.questionData.forEach(question => {
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

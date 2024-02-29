const path = require('path');
const ejs = require('ejs');
// Declare variables that will hold the dynamically imported modules
let describe, before, after, it, server;
let expect, chai, chaiHttp;

let serverClosed = false;


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



(async () => {
    console.log("before importing mocha...");

    // Dynamically import Mocha and its functions
    let Mocha;

    try {
        Mocha = await import('mocha');
    } catch (e) {
        console.error('Error importing modules:', e);
        process.exit(1);
    }


    // Initialize a new Mocha instance
    const mocha = new Mocha.default();

    // Add each test file to the Mocha instance
    mocha.addFile('test/apiController.test.js');
    mocha.addFile('test/setUpController.test.js');

    let seedDatabase;


    // Now, run the tests
    mocha.loadFiles(() => {
        const { describe, before, after, it } = Mocha;


        describe('My Test Suite', function () {
            this.timeout(50000); // Increase the timeout to 30 seconds for this suite

            before(async function () {
                const setupController = await import('../controllers/setupController.js');
                seedDatabase = setupController.seedDatabase;
                // Assuming `seedDatabase` is an async function that seeds your database
                await seedDatabase();
            });

            function closeServer(server) {
                return new Promise((resolve, reject) => {
                    if (server && !serverClosed) {
                        server.close((err) => {
                            serverClosed = true;
                            if (err) reject(err);
                            else resolve();
                        });
                    } else {
                        resolve();
                    }
                });
            }



            // Define the Math Questions View test suite
            describe('Math Questions View', function () {
                before(function () {
                    serverClosed = false;
                });

                after(async function () {
                    await closeServer(server);
                });

    

                it('should render the maths questions with the correct data', async function () {
                    // Path to your EJS file
                    const filePath = path.join(__dirname, '../views', 'maths_questions.ejs'); // Ensure the path is correct
                    // Use a promise to await the ejs.renderFile function
                    const html = await new Promise((resolve, reject) => {
                        ejs.renderFile(filePath, { pageData: pageData.page }, {}, (err, str) => {
                            if (err) reject(err);
                            else resolve(str);
                        });
                    }).catch(error => {
                        // Handle any error that occurred during rendering
                        console.error('Error rendering EJS template:', error);
                        throw error; // Rethrow the error to be caught by the try/catch block
                    });
;

                    // Now you can use try/catch to handle assertions
                    try {
                        expect(html).to.include(pageData.page.description);
                        expect(html).to.include('Understanding Angles');
                        expect(html).to.include('Which is the correct answer?');

                        pageData.page.questionData.forEach(question => {
                            expect(html).to.include(question.questionText);
                        });


                                    // All tests passed, no error to catch
                                } catch (error) {
                                    // If an assertion fails, throw the error
                                    throw error;
                                }
                            });
                        });
                    

            });
                    // Run the tests after the test suite definition
                    mocha.run(failureCount => {
                        closeServer(server).then(() => process.exit(failureCount ? 1 : 0));
                    });

                });

           


        })().catch((err) => {
            console.error('An error occurred:', err);
            process.exit(1);
        });
    

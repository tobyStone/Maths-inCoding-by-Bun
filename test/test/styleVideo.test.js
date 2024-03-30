const puppeteer = require('puppeteer');
const fs = require('fs').promises;

/**
 * Describes tests for validating CSS styling on the video page.
 */


describe('CSS Styling for Video Page', function () {
    this.timeout(10000);
    let browser, page;

    before(async function () {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        const chai = await import('chai');
        expect = chai.expect;

        // Mock the `page` data expected by the EJS template
        const mockPageData = {
            videoData: [{
                imgSrc: 'path_to_image.jpg',
                video: 'path_to_video.mp4'
            }],
            description: 'This is a mocked description.'
        };

        // Convert your mock data into a string that can be embedded into your HTML content
        const mockPageDataString = JSON.stringify(mockPageData);

        // Read the CSS file contents asynchronously
        const cssContent = await fs.readFile('../maths_in_coding_by_node/public/VideoPlayer.css', 'utf-8');

        // Set up the CSS and HTML content for the page
        const htmlContent = `
        <html>
        <head>
            <style>${cssContent}</style>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
        </head>
        <body>
            <script>
            // Mock the page data on the window object so it can be used in the page
            window.mockPageData = ${mockPageDataString};
            </script>
            <header class="SiteHeader">
                <h1>Title</h1>
            </header>
            <div id="missionStatement">Our Mission Statement</div>
            <div class="video-container">
                <video src="example.mp4"></video>
            </div>
            <div class="video-controls">
                <!-- video controls here -->
            </div>
            <div class="wordWrapper2">
                <!-- feedback link here -->
            </div>
            <!-- Inject your mock data into the HTML as if it were rendered by EJS -->
            <section class="description-container">
                <h3>${mockPageData.description}</h3>
            </section>
        </body>
        </html>
    `;
        await page.setContent(htmlContent);
    });

    it('header.SiteHeader should have the correct background and shadow', async function () {
        const element = await page.$('header.SiteHeader');
        const computedStyle = await page.evaluate(el => {
            const style = getComputedStyle(el);
            return { backgroundColor: style.backgroundColor, boxShadow: style.boxShadow };
        }, element);
        expect(computedStyle.backgroundColor).to.equal('rgb(109, 123, 171)');
        expect(computedStyle.boxShadow).to.equal('rgba(0, 0, 0, 0.2) 0px 2px 4px 0px');
    });

    it('header.SiteHeader h1 should have the correct font-family and size', async function () {
        const element = await page.$('header.SiteHeader h1');
        const computedStyle = await page.evaluate(el => {
            const style = getComputedStyle(el);
            return { fontFamily: style.fontFamily, fontSize: style.fontSize };
        }, element);
        expect(computedStyle.fontFamily).to.match(/Roboto Slab/);
        expect(computedStyle.fontSize).to.equal('64px'); // Check if this matches the actual size
    });


    // Disconnect from the test database after all test suites have run
    //then disconnect the browser
    after(async function () {

        await browser.close();
    });
});

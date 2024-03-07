const puppeteer = require('puppeteer');
const fs = require('fs').promises; // Use the fs promises API for async read

/**
 * This test suite is responsible for checking the CSS styling of a web page using Puppeteer.
 */
describe('CSS Styling', function () {
    this.timeout(10000); // Set timeout for asynchronous operations
    let browser, page;

    /**
     * Before all tests, launch a browser instance, create a new page, import Chai for assertions,
     * and set up the test environment with the CSS content and the necessary HTML structure.
     */
    before(async function () {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        const chai = await import('chai');
        expect = chai.expect;

        // Read the CSS file contents asynchronously and setup the HTML content for the page.
        const cssContent = await fs.readFile('../maths_in_coding_by_node/public/style.css', 'utf-8');
        const htmlContent = `
            <html>
            <head>
                <style>${cssContent}</style>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
            </head>
            <body>
                <header class="SiteHeader">
                    <h1>Title</h1>
                </header>
                <div class="image-and-heading-container">
                    <img class="containerImg" src="image.jpg" alt="Container Image">
                    <div id="missionStatement">Our Mission Statement</div>
                </div>
                <div class="content-container">
                    <!-- content -->
                </div>
                <div id="FatFooter">
                    <!-- footer content -->
                </div>
            </body>
            </html>
        `;
        await page.setContent(htmlContent);
    });

    /**
     * Test to verify that the header's background color and shadow are correctly applied.
     */
    it('header.SiteHeader should have the correct background and shadow', async function () {
        const element = await page.$('header.SiteHeader');
        const computedStyle = await page.evaluate(el => {
            const style = getComputedStyle(el);
            return { backgroundColor: style.backgroundColor, boxShadow: style.boxShadow };
        }, element);
        expect(computedStyle.backgroundColor).to.equal('rgb(109, 123, 171)');
        expect(computedStyle.boxShadow).to.equal('rgba(0, 0, 0, 0.2) 0px 2px 4px 0px');
    });

    /**
     * Test to verify that the header's H1 tag has the correct font family and size.
     */
    it('header.SiteHeader h1 should have the correct font-family and size', async function () {
        const element = await page.$('header.SiteHeader h1');
        const computedStyle = await page.evaluate(el => {
            const style = getComputedStyle(el);
            return { fontFamily: style.fontFamily, fontSize: style.fontSize };
        }, element);
        expect(computedStyle.fontFamily).to.match(/Roboto Slab/);
        expect(computedStyle.fontSize).to.equal('64px'); // This should match the actual font size in CSS
    });

    /**
     * After all tests, close the browser to clean up.
     */
    after(async function () {
        await browser.close();
    });
});

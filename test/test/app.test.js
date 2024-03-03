// Import your app
const app = require('../app');
const db = app.db; // Assuming you export your DB connection as shown in your app.js file

describe('App and Database Integration Tests', function() {
    // Increase the timeout if your database connection takes longer
    this.timeout(5000);

    before((done) => {
        // Check if the database is connected
        const chai = require('chai');
        const chaiHttp = require('chai-http');
        const { expect } = chai;
        chai.use(chaiHttp);


        db.once('open', done);
    });

    describe('Server Connection', () => {
        it('should connect to the HTTP server', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    // Add more tests as needed for your controllers and other parts of your application
});

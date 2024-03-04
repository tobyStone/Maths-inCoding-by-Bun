let chai;
let request, expect, app;

describe('App and Database Integration Tests', function () {
    this.timeout(5000);

    before(async function () {
        chai = await import('chai');
        const appModule = await import('../app.js');
        const supertestModule = await import('supertest');
        request = supertestModule.default;
        app = appModule.default;
        expect = chai.expect;
    });

    describe('Server Connection', function () {
        it('should connect to the HTTP server', async function () {
            const res = await request(app).get('/');
            expect(res.status).to.equal(200);
        });
    });
});

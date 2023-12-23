const request = require("supertest");
const server = require("../index");

describe('/GET api/notes', () => {
    it('Method GET is positive response', async()=>{
        const response = await request(server).get("/api/notes");
        expect(response.statusCode).toBe(200);
        expect(response.get('Content-Type')).toMatch(/json/);
    })
});


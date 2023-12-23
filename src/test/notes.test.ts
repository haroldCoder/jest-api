const request = require("supertest");
const server = require("../index");

describe('/GET api/notes', () => {
    it('Method GET is positive response', async()=>{
        await request(server).get("/api/notes")
        .expect("Content-Type", /json/)
        .expect(200);
    })
});

describe('/POST api/notes', () => {
    it('Save note in MongoDB', (done) => {
        const newNote = {title: "first note", description: "description of first note", author: "koder"};
        request(server).post("/api/notes").send(newNote)
        .expect(200, done)
    });
});
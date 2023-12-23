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

describe('/PUT api/notes/:id', ()=>{
    it('Update note in MongoDB', (done)=>{
        const note = {title: "update note", description: "description of update note", author: "koder"};

        request(server).put(`/api/notes/65873d3cf623ed64efc01bdd`).send(note)
        .expect(200, done)
    })
})

describe('/DELETE api/notes/:id', () => {
    it('Delete note in MongoDB', (done)=>{
        request(server).delete(`/api/notes/65873e3728914df4ec4900bf`)
        .expect(200, done)
    })
});
import {Request, Response, Router} from "express";
import Notes from "../controllers/notes.controllers";

const router = Router();

router.route("/api/notes")
.get((req: Request, res: Response)=>{
    new Notes(req, res).getNotes();
})
.post((req: Request, res: Response)=>{
    const {title, description, author} = req.body;
    console.log(title);
    

    new Notes(req, res).saveNote({title: title, description: description, author: author, date: new Date()});
})

module.exports = router;
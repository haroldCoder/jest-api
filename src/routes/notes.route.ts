import {Request, Response, Router} from "express";
import Notes from "../controllers/notes.controllers";

const router = Router();

router.route("/api/notes")
.get((req: Request, res: Response)=>{
    new Notes(req, res).getNotes();
})

module.exports = router;
import { Request, Response } from "express";
import NotesDB from "../models/notes.models";
import { INote } from "../interface/INote";


class Notes extends NotesDB{
    req: Request;
    res: Response;

    constructor(req: Request, res: Response){
        super("notes");
        this.req = req;
        this.res = res;
    }
    getNotes = async() =>{
        const notes: INote[] = await this.collect.find();
        this.res.json(notes);
    }
}

export default Notes;
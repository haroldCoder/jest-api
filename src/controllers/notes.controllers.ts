import { Request, Response } from "express";
import NotesDB from "../models/notes.models";
import { INote } from "../interface/INote";


class Notes extends NotesDB {
    req: Request;
    res: Response;

    constructor(req: Request, res: Response) {
        super("notes");
        this.req = req;
        this.res = res;
    }
    getNotes = async () => {
        const notes: INote[] = await NotesDB.collect.find();
        this.res.json(notes);
    }

    saveNote = async ({ title, description, author, date }: INote) => {
        try {
            const newNote = await NotesDB.collect.create({
                title: title,
                description: description,
                author: author,
                date: date
            })
            newNote.save();
            this.res.status(200).send("new note save");
        }
        catch (err) {
            this.res.status(500).send(`ocurred error ${err}`)
        }
    }

    updateNote = (id: number, {title, description, author}: INote) =>{

    }
}

export default Notes;
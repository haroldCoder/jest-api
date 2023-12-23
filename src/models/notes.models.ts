import {Model, Schema, model} from "mongoose"
import { INote } from "../interface/INote";

class NotesDB{
    private notesSchema: Schema<INote>;
    protected collect: Model<INote>;

    constructor(table: string){
        this.notesSchema = new Schema({
            title: {
                type: String,
                unique: false,
                required: true
            },
            description: {
                type: String,
                unique: false,
                required: true
            },
            author: {
                type: String,
                unique: false,
                required: true
            },
            date: {
                type: Date
            }
        },{timestamps: true});

        this.collect = model("notes", this.notesSchema);
    }
}

export default NotesDB;
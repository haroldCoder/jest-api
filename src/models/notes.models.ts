import {Model, Schema, model} from "mongoose"
import { INote } from "../interface/INote";

class NotesDB{
    private notesSchema: Schema<INote>;
    protected static collect: Model<INote>;

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
        if(!NotesDB.collect){
            NotesDB.collect = model(table, this.notesSchema);
        }
        
    }
}

export default NotesDB;
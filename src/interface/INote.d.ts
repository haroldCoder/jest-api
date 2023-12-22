export interface INote extends Document {
    title: string;
    description: string;
    author: string;
    date: Date;
}
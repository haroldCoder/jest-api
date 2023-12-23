import express from "express"
import dotenv from "dotenv";
import ConnectMongoDB from "./connection/connectMongoDB";

dotenv.config();
const app = express();

const connectmongo = new ConnectMongoDB(process.env.MONGO_URI ?? "");
connectmongo.Connect();

app.use("/", require("./routes/notes.route"));


export default app;
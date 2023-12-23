import express from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { MiddlewareAuth } from "./middleware/authMiddleware";

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use("/", MiddlewareAuth, require("./routes/notes.route"));


export default app;
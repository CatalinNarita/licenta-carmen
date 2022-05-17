import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(router);

app.listen(5001, () => console.log("Listening on port 5001"));

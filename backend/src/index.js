import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://dce1-2a02-2f0e-418-7600-9c98-b73b-5ef4-81ff.eu.ngrok.io",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(router);

app.listen(5001, () => console.log("Listening on port 5001"));

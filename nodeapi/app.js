import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

config({
    path: "./data/config.env"
});

// CORS options
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

// Using Middlewares
app.use(cors(corsOptions)); // Enable CORS with options
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/users", userRouter);
app.use("/task", taskRouter);


app.get("/", (req, res) => {
    res.send("Hello World!");
});
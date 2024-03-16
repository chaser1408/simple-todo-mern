import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/todos", todoRoutes);

const mongodb =
    "mongodb+srv://charon01:Charontps1408@mern01.12ykgf0.mongodb.net/?retryWrites=true&w=majority&appName=MERN01";
app.get("/", (req, res) => {
    res.send("Welcome!!");
});

const PORT = process.env.PORT || 5000;
mongoose
    .connect(mongodb)
    .then(() => {
        app.listen(PORT, () => console.log(`Mongooseeeee is on ${PORT}!!!`));
    })
    .catch((err) => console.log(`Oops ${err}`));

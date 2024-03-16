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

app.get("/", (req, res) => {
    res.send("Welcome!!");
});

mongoose
    .connect(process.env.mongodb)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(`Mongooseeeee is on ${PORT}!!!`)
        );
    })
    .catch((err) => console.log(`Oops ${err}`));

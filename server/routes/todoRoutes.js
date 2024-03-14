import express from "express";
import {
    readTodos,
    createTodos,
    updateTodos,
} from "../controller/todoController.js";

const router = express.Router();
router.get("/", readTodos);
router.post("/", createTodos);
router.patch("/:id", updateTodos);
export default router;

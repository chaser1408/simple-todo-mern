import express from "express";
import {
    readTodos,
    createTodos,
    updateTodos,
    deleteTodos,
} from "../controller/todoController.js";

const router = express.Router();
router.get("/", readTodos);
router.post("/", createTodos);
router.patch("/:id", updateTodos);
router.delete("/:id", deleteTodos);
export default router;

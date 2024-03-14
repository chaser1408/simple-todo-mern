import Todo from "../models/todoModels.js";
import mongoose from "mongoose";

export const readTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

export const createTodos = async (req, res) => {
    const todo = await Todo(req.body);
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
};

export const updateTodos = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The ID ${id} is not valid!!!`);
    }
    const todo = { title, content, _id: id };
    console.log(todo);
    await Todo.findByIdAndUpdate(id, todo, { new: true });
    res.json(todo);
};

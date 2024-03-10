import Todo from "../models/todoModels.js";

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

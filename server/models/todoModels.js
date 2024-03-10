import mongoose from "mongoose";
const Schema = mongoose.Schema;
const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        timestamp: {
            type: Date,
            default: new Date().toLocaleString("en-US", {
                timeZone: "Asia/Ho_Chi_Minh",
            }),
        },
    },
    { timestamp: true }
);

// console.log(moment());

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;

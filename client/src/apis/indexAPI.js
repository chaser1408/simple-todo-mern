import axios from "axios";
const url = "http://localhost:5000/todos";
export const readTodoApi = () => axios.get(url);

export const createTodoApi = (newTodos) => axios.post(url, newTodos);

export const updateTodoApi = (id, updateTodo) =>
    axios.patch(`${url}/${id}`, updateTodo);

export const deleteTodoApi = (id) => axios.delete(`${url}/${id}`);

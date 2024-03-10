import axios from "axios";
const url = "http://localhost:5000/todos";
export const readTodoApi = () => {
    return axios.get(url);
};

export const createTodoApi = (newTodos) => {
    return axios.post(url, newTodos);
};

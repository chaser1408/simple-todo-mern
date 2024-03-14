import * as api from "../apis/indexAPI.js";

export const readTodo = async () => {
    try {
        const { data } = await api.readTodoApi();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createTodo = async (newTodo) => {
    try {
        const { data } = await api.createTodoApi(newTodo);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateTodo = async (id, todo) => {
    try {
        const { data } = await api.updateTodoApi(id, todo);
        return data;
    } catch (error) {
        console.log(error);
    }
};

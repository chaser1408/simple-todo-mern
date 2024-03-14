import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { createTodo, readTodo, updateTodo } from "./functions/indexFunction.js";

const App = () => {
    const [newTodo, setNewTodo] = useState({ title: "", content: "" });
    const [todo, setToDo] = useState(null);
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        const clearField = (e) => {
            if (e.keyCode === 27) {
                clear();
            }
        };

        window.addEventListener("keydown", clearField);
        return () => window.removeEventListener("keydown", clearField);
    }, []);

    useEffect(() => {
        let currentTodo =
            currentId !== 0
                ? todo?.find((todo) => todo._id === currentId)
                : { title: "", content: "" };
        setNewTodo(currentTodo);
    }, [currentId, todo]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await readTodo();
            setToDo(result);
            console.log(result);
        };
        fetchData();
    }, [currentId]);

    const clear = () => {
        setCurrentId(0);
        setNewTodo({ title: "", content: "" });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (currentId === 0) {
            const result = await createTodo(newTodo);
            setToDo([...todo, result]);
            clear();
        } else {
            await updateTodo(currentId, newTodo);
            clear();
        }
    };

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={onSubmitHandler}>
                    <div className="row">
                        <pre>{JSON.stringify(newTodo)}</pre>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">title</i>
                            <input
                                id="icon_prefix"
                                type="text"
                                className="validate"
                                value={newTodo.title}
                                active={newTodo.toString()}
                                onChange={(e) =>
                                    setNewTodo({
                                        ...newTodo,
                                        title: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="icon_prefix">Todo</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">description</i>
                            <input
                                id="description"
                                type="tel"
                                className="validate"
                                value={newTodo.content}
                                active={newTodo.toString()}
                                onChange={(e) =>
                                    setNewTodo({
                                        ...newTodo,
                                        content: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="description">Content</label>
                        </div>
                    </div>
                    <div className="row right-align">
                        <button className="waves-effect waves-light btn">
                            Create
                        </button>
                    </div>
                </form>
                {!todo ? (
                    <Preloader />
                ) : todo?.length > 0 ? (
                    <ul className="collection">
                        {todo?.map((itemTodo) => (
                            <li
                                className="collection-item"
                                key={itemTodo._id}
                                onClick={() => setCurrentId(itemTodo._id)}>
                                <h5>{itemTodo.title}</h5>
                                <p>{itemTodo.content}</p>
                                <a
                                    href="#!"
                                    className="secondary-content"
                                    style={{
                                        position: "relative",
                                        top: "-65px",
                                        right: " 30px",
                                    }}>
                                    <i className="material-icons">delete</i>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>Nothing to do!</div>
                )}
            </div>
        </div>
    );
};

export default App;

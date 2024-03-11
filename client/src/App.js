import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { createTodo, readTodo } from "./functions/indexFunction.js";

const App = () => {
    const [newTodo, setNewTodo] = useState({ title: "", content: "" });
    useEffect(() => {
        const fetchData = async () => {
            const result = await readTodo();
            setToDo(result);
            console.log(result);
        };
        fetchData();
    }, []);

    const [todo, setToDo] = useState(null);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const result = await createTodo(newTodo);
        console.log(result, "dataPost");
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
                        {todo?.map((itemTodo, idx) => (
                            <li class="collection-item" key={idx}>
                                <h5>{itemTodo.title}</h5>
                                <p>{itemTodo.content}</p>
                                <a
                                    href="#!"
                                    class="secondary-content"
                                    style={{ paddingTop: "20px" }}>
                                    <i class="material-icons">delete</i>
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

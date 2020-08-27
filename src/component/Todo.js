import React from 'react';
import { useState } from 'react';

const Todo = () => {
    const [name, setName] = useState([]);
    const [todo, setTodo] = useState([]);

    const removeTodo = (id) => {
        setTodo(todo.filter((todo) => todo.id !==id ))
    }

    return (
        <div>
            <form>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button type="button" onClick={e => setTodo([...todo , { id: Date.now(), text: name}])} >Add to list</button>

                {
                    todo.map((todo) => (
                        <li key={todo.id} >
                            {todo.text} <a href="#" onClick={() => removeTodo(todo.id)}>X</a>
                            </li>
                    ))
                }
            </form>
        </div>
    );
};

export default Todo;


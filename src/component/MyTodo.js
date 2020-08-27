import React, {useState} from 'react';

const MyTodo = () => {

    const [name, setName] = useState([]);
    const [todo, setTodo] = useState([]);
    const [count, setCount] = useState(1);

   

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button type="button" onClick={e=> setTodo([...todo, {text: name}, {ed:count+1}])}>Add ToDo</button>
            {
                todo.map((todo) => (
                    <li key={todo.id}>Name: {todo.text}  </li>
                    
                    ))
            }
        </div>
    );
};

export default MyTodo;
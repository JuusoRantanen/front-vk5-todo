import './App.css';
import React, { useState } from 'react';

function ToDoList() {

    const [manager, setManager] = React.useState({ task: '', date: '' });
    const [todos, setTodos] = useState([]);
    const inputChanged = (event) => {
        setManager({ ...manager, [event.target.name]: event.target.value });

    }
    const test = (delman) => {
        
        setTodos(todos.filter((manager,index) => delman !== index))
        
    }
    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, manager]);
        console.log(todos);
    }
    return (
        <div className="App">
            <label for="task">Task:</label>
            <input type="text" name="task" onChange={inputChanged} value={manager.task} />
            <label for="date">Date:</label>
            <input type="date" name="date" onChange={inputChanged} value={manager.date} />
            <button onClick={addTodo}>Add</button>
            <table> <thead>
                <tr>
                    <th>Task</th>
                    <th>Date</th>
                    <th>Done/Delete</th>
                </tr>
            </thead>
                <tbody>
                    {todos.map((manager, index) => <tr key={index}>
                        <td>{manager.task}</td>
                        <td>{manager.date}</td>
                        <td><button onClick={() => test(index)} >Delete</button></td>
                    </tr>)}

                </tbody></table>
        </div>
    );
}

export default ToDoList;
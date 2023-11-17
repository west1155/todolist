import './App.css';
import React, {useState, useEffect} from 'react'
import { Container, TextField, Button, Typography } from '@mui/material';
import Cookies from 'js-cookie';

function App() {

  const [inputTask, setInput] = useState('')
  const [tasks, setTasks] = useState([])


  const task = {
    id: Math.floor(Math.random()*1000),
    value: inputTask
  }


  const addTask = (input) => {
    if (input !== null && input !== '') {
      setTasks([...tasks, task]);
      setInput('')
    }
  };

  const deleteItem = (id) => {
    const newArray = tasks.filter(item => item.id !== id)
    setTasks(newArray)
  }
  
  return (
    <Container maxWidth="sm" className="app-container">
      <Typography variant="h4" component="h1" className="app-heading">
        To Do List
      </Typography>
    <div className="todo-container">
      <div className="todo-app">
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            className="todo-input"
            placeholder={"Input text"}
            value={inputTask}
            onChange={(e) => setInput(e.target.value)}/>
        <Button variant="contained" color="primary" className="add-button" onClick={addTask} >Add Task</Button>
        <div>
          <ul>
            {tasks.map((task, id) => (
                <li key={id}>
                  {task.value} <Button className="delete-button" onClick={() => deleteItem(task.id) }>X</Button>
                </li>

            ))}
          </ul>
          </div>
      </div>
    </div>
    </Container>
  );
}

export default App;

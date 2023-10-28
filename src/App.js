import './App.css';
import React, {useState} from 'react' 
import TodoForm from "./TodoForm";
import { Container, TextField, Button, Typography } from '@mui/material';

function App() {
  
  
  const [inputTask, setInput] = useState('')
  const [tasks, setTasks] = useState([''])
  
  const addTask = (input) => {
    if (input !== null && input !== '') {
      setTasks([...tasks, inputTask]);
      setInput('')
      debugger  
    }
  };
  
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
        <TodoForm tasks={tasks}/>
      </div>
      
    </div>
    </Container>
  );
}

export default App;

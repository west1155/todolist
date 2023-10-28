import './App.css';
import React, {useState} from 'react' 
import TodoForm from "./TodoForm";

function App() {
  
  
  const [inputTask, setInput] = useState('')
  const [tasks, setTasks] = useState(['dasdfe','dfwetrg'])
  
  const addTask = (input) => {
    if (input !== null && input !== '') {
      setTasks([...tasks, inputTask]);
      setInput('')
      debugger  
    }
  };
  
  return (
    <div className="App">
      <div className="App-header">
          <input type='text'
            placeholder={"Input text"}
            value={inputTask}
            onChange={(e) => setInput(e.target.value)}/>
          <button type='submit' onClick={addTask} >Add Task</button>
        <TodoForm tasks={tasks}/>
      </div>
      
    </div>
  );
}

export default App;

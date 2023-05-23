import React,{useState} from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

const App =()=> {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Implement toggle, delete, and edit logic

  return (
    <div>
      <h1>Todo App</h1>
      <AddTask onAdd={handleAddTask} />
      <ListTask tasks={tasks} />
    </div>
  );
};

export default App;








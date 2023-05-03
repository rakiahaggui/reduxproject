import React from 'react';
import './App.css';
import Addtask from './Component/Addtask';
import ListTask from './Component/ListTask';
import Task from './Component/Task';
function App() {
  return (
    <div className="App">
      <Addtask/>
      <ListTask/>
      <Task/>
    </div>
  );
}

export default App;

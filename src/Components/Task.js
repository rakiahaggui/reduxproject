import React from 'react';

const Task = ({ task, toggleTask, deleteTask, editTask }) => {
  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    const newDescription = prompt('Enter a new description:', task.description);
    if (newDescription && newDescription.trim() !== '') {
      editTask(task.id, newDescription);
    }
  };

  return (
    <li className={task.isDone ? 'done' : ''}>
      <span onClick={handleToggle}>{task.description}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default Task;

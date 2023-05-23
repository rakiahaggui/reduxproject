import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions'; // Assurez-vous d'importer correctement votre action

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      addTask(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (description) => dispatch(addTask(description))
});

const ConnectedAddTask = connect(null, mapDispatchToProps)(AddTask);

export default ConnectedAddTask;
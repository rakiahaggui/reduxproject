import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '.Components/actions'; // Assurez-vous d'importer correctement vos actions
import Task from '.Components/Task'; // Assurez-vous d'importer correctement le composant Task

const ListTask = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  toggleTask,
  deleteTask,
  editTask
};

const ConnectedListTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTask);

export default ConnectedListTask;

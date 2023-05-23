const addTask = (description) => ({
  type: 'ADD_TASK',
  payload: {
    id: Date.now(),
    description,
    isDone: false
  }
});

const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: {
    id
  }
});

const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id
  }
});
const editTask = (id, description) => ({
  type: 'EDIT_TASK',
  payload: {
    id,
    description
  }
});

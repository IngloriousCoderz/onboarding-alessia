export const selectText = (state) => state.text;

export const selectTasks = (state) => state.tasks;
export const selectTaskById = (state, id) =>
  state.tasks.find((task) => task.id === id);

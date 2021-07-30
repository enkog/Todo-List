const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
  addTask(task) {
    tasks.push(task);
  },
  editTask(task) {
    const index = task.index - 1;
    tasks[index].description = task.description;
  },
  deleteTask(index) {
    tasks.filter((todo, i) => i !== index);
    tasks.splice(index, 1);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].index = i + 1;
    }
  },
  updateTask(item) {
    const index = tasks.findIndex((task) => task.description === item.description);
    tasks.splice(index, 1, item);
  },
  clearCompleted() {
    tasks.filter((task) => task.completed === false);
  },
}));

export default mock;

const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
  addTask(task) {
    tasks.push(task);
  },

  editTask(desc, index) {
    const currTask = tasks[index];
    currTask.description = desc;
  },

}));

export default mock;

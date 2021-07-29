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

  deleteTask(index) {
    tasks.filter((todo, i) => i !== index);
    tasks.splice(index, 1);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].index = i + 1;
    }
  },


}));

export default mock;

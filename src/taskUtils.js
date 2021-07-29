class TaskUtils {
  constructor() {
    this.localStorage = localStorage;
  }

  getTasks() {
    const todos = JSON.parse(this.localStorage.getItem('Todos'));

    return todos === null ? [] : todos;
  }

  addTask(task) {
    const tasks = this.getTasks();
    tasks.push(task);
    this.setItem(tasks);
  }

  setItem(arr) {
    this.localStorage.setItem('Todos', JSON.stringify(arr));
  }

  editTask(desc, index) {
    const tasks = this.getTasks();
    const currTask = tasks[index];
    currTask.description = desc;

    this.updateTasks(tasks);
  }

  deleteTask(index) {
    const tasks = this.getTasks();
    tasks.filter((todo, i) => i !== index);

    tasks.splice(index, 1);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].index = i + 1;
    }

    this.setItem(tasks);
  }

  clearCompleted() {
    const localTasks = this.getTasks();
    const tasks = localTasks.filter((task) => task.completed === false);

    this.updateTasks(tasks);
  }

  updateTasks(arr) {
    this.localStorage.removeItem('Todos');
    this.setItem(arr);
  }

  updateTask(item) {
    const todos = this.getTasks();
    // get index of item
    const index = todos.findIndex((todo) => todo.description === item.description);

    // replace item at index
    todos.splice(index, 1, item);

    // add todo
    this.setItem(todos);
  }
}

module.exports = TaskUtils;
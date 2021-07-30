import TaskUtils from '../taskUtils';
import taskCompleteUtil from '../completed';

jest.mock('../taskUtils');

document.body.innerHTML = '<div>'
+ ' <ul id="task-list">'
+ '</ul>'
+ '<button id="add-task" />'
+ '</div>';

const displayTasks = (arr) => {
  const ul = document.querySelector('ul');
  arr.forEach((e) => {
    const li = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = 'check';
    checkBox.checked = e.completed;

    const label = document.createElement('label');

    label.appendChild(document.createTextNode(e.description));
    li.appendChild(checkBox);
    li.appendChild(label);
    ul.appendChild(li);
  });
};

describe('add exactly one <li> element to the list in the DOM', () => {
  const taskUtil = new TaskUtils();
  const task = { description: 'Task 1', completed: false, index: 1 };
  taskUtil.addTask(task);
  const tasks = taskUtil.getTasks();
  displayTasks(tasks);

  test('that the length of the list is 1', () => {
    const list = document.querySelectorAll('#task-list li');
    expect(list).toHaveLength(1);
  });

  test('that the length of the list is not zero', () => {
    const list = document.querySelectorAll('#task-list li');
    expect(list).not.toHaveLength(0);
  });

  test('that the description is Task 1 ', () => {
    expect(tasks[0].description).toEqual('Task 1');
  });
});

describe('update an items completed status', () => {
  test('that the task is completed', () => {
    const taskUtils = new TaskUtils();
    const li = document.querySelector('#task-list li');
    const arr = taskUtils.getTasks();

    const arrs = { li, arr, taskUtils };

    taskCompleteUtil(arrs);

    const updateArr = taskUtils.getTasks();
    const task = updateArr.filter((a) => a.description === li.textContent);

    expect(task[0].completed).toBeTruthy();
  });
});

describe('editing task description', () => {
  test('that the Task 1 is changed to Task 2', () => {
    const taskUtil = new TaskUtils();

    const currTask = { description: 'Task 2', completed: true, index: 1 };

    taskUtil.editTask(currTask);

    const tasks = taskUtil.getTasks();
    const index = currTask.index - 1;
    const editedTask = tasks[index];

    expect(editedTask.description).toEqual('Task 2');
  });
});

describe('remove exactly one <li> element from the list in the DOM', () => {
  test('that one item was removed from the list', () => {
    const taskUtil = new TaskUtils();
    const taskDesc = document.querySelectorAll('#task-list li').textContent;

    const currTask = taskUtil.getTasks().filter((task) => task.description === taskDesc);
    taskUtil.deleteTask(currTask.index);

    const tasks = taskUtil.getTasks();

    displayTasks(tasks);

    const ul = document.querySelector('ul');

    if (ul) {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
    }

    displayTasks(tasks);

    const list = document.querySelectorAll('#task-list li');
    expect(list).toHaveLength(0);
  });
});
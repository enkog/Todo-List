/*eslint-disable */
import { screen } from '@testing-library/jest-dom';
import TaskUtils from '../taskUtils';
import taskCompleteUtil from '../completed';
/* eslint-enable */

jest.mock('../taskUtils');

document.body.innerHTML = '<div>'
+ '<div class="add-todo">'
+ '<input type="text" placeholder="Add to your list..." data-testid="todo" value="hello world" id="add-todo-input">'
+ '<i class="fas fa-level-down-alt fa-rotate-90"></i>'
+ '</div>'
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
    checkBox.id = 'check';
    checkBox.checked = e.completed;

    const label = document.createElement('label');
    label.id = 'todo';

    label.appendChild(document.createTextNode(e.description));
    li.appendChild(checkBox);
    li.appendChild(label);
    ul.appendChild(li);
  });
};

describe('test dom manipulation', () => {
  test('that the input field has a value', () => {
    const inputTodo = document.getElementById('add-todo-input');
    expect(inputTodo).toHaveValue('hello world');
  });
  test('that the task the task is completed', () => {
    const check = document.getElementById('check');
    expect(check).not.toBeChecked();
  });
  test('that task 1 is the first todo', () => {
    const todo = document.getElementById('todo');
    expect(todo).toHaveTextContent('Task 1');
  });
});

describe('add exactly one <li> element to the list in the DOM', () => {
  const taskUtil = new TaskUtils();
  const task = { description: 'Task 1', completed: false, index: 1 };
  taskUtil.addTask(task);
  const tasks = taskUtil.getTasks();
  displayTasks(tasks);

  test('that the length of the list is 1', () => {
    const list = document.querySelectorAll('#task-list li');
    expect(list).not.toHaveLength(0);
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

describe('clear completed task', () => {
  test('that the completed task is cleared', () => {
    const taskUtils = new TaskUtils();

    const completedTask = taskUtils.clearCompleted();
    expect(completedTask).toHaveLength(1);
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
    expect(list).toHaveLength(2);
  });
});

describe('testing drag and drop function', () => {
  const taskUtil = new TaskUtils();
  let task = { description: 'Task 1', completed: true, index: 1 };
  taskUtil.addTask(task);
  task = { description: 'Task 2', completed: false, index: 2 };
  taskUtil.addTask(task);
  const tasks = taskUtil.getTasks();
  displayTasks(tasks);

  const list = document.querySelector('#task-list');
  const a = list.childNodes[0];
  const b = list.childNodes[0];

  a.childNodes[1].textContent = 'Task 2';
  b.childNodes[1].textContent = 'Task 1';

  test('drag item', () => {
    const arr = taskUtil.getTasks();
    expect(arr[0].description).toBe('Task 1');
  });
});
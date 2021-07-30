import TaskUtils from '../taskUtils';
import {screen} from '@testing-library/jest-dom'

jest.mock('../taskUtils');

document.body.innerHTML = '<div>'
+  '<div class="add-todo">'
+  '<input type="text" placeholder="Add to your list..." data-testid="todo" value="hello world" id="add-todo-input">'
+  '<i class="fas fa-level-down-alt fa-rotate-90"></i>'
+  '</div>'
+  ' <ul id="task-list">'
+  '</ul>'
+  '<button id="add-task" />'
+  '</div>';

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

    label.appendChild(document.createTextNode(e.description));
    li.appendChild(checkBox);
    li.appendChild(label);
    ul.appendChild(li);
  });
};

describe('test dom manipulation', () => {
  test('that the input field has a value', () => {
    const inputTodo = document.getElementById('add-todo-input');
    console.log(inputTodo.value);
    expect(inputTodo).toHaveValue('hello world');
  });
  test('that the task the task is completed', () => {
    const check = document.getElementById('check');
    console.log(check.checked)
    expect(check).not.toBeChecked();
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

describe('remove exactly one <li> element to the list in the DOM', () => {
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

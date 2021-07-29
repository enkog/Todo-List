import TaskUtils from '../taskUtils';

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
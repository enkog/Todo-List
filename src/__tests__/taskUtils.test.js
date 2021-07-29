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

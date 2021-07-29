import TaskUtils from '../taskUtils';

jest.mock('../taskUtils');

document.body.innerHTML = '<div>'
+ ' <ul id="task-list">'
+ '</ul>'
+ '<button id="add-task" />'
+ '</div>';


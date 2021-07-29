export default function taskComplete(arrs) {
  const { li, arr, taskUtils } = arrs;
  const arrItem = arr.find((element) => element.description === li.textContent);
  arrItem.completed = !arrItem.completed;

  taskUtils.updateTask(arrItem);
}
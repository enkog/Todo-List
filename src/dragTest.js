export default function DraggedItem(ul, arr) {
  const currUl = ul.querySelectorAll('.draggable');

  let idx;
  arr.forEach((item) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < currUl.length; i++) {
      if (currUl[i].textContent === item.description) {
        idx = i;
        break;
      }
    }
    item.index = idx + 1;
  });
}
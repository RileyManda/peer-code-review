export function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.classList.add('dragging');
}

export function handleDragOver(event) {
  event.preventDefault();
}

export function handleDragEnter(event) {
  event.target.classList.add('drag-over');
}

export function handleDragLeave(event) {
  event.target.classList.remove('drag-over');
}

export function handleDrop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/plain');
  const item = document.getElementById(itemId);
  const target = event.target.closest('li');

  if (target && item) {
    target.classList.remove('drag-over');
    target.before(item);
  }
}

export function handleDragEnd(event) {
  event.target.classList.remove('dragging');
}

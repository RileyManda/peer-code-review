const handleListItemClick = (event) => {
  const listItem = event.target.closest('li');
  const label = listItem.querySelector('label');

  listItem.classList.toggle('selected'); // Toggle the 'selected' class

  if (listItem.classList.contains('selected')) {
    label.contentEditable = true;
    label.focus();
  } else {
    label.contentEditable = false;
  }
};

const listItems = document.querySelectorAll('.list-items li');
listItems.forEach((listItem) => {
  listItem.addEventListener('click', handleListItemClick);
});

export default handleListItemClick;

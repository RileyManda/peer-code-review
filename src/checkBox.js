const handleCheckboxChange = (event) => {
  const listItem = event.target.closest('li');
  const label = listItem.querySelector('label');

  if (event.target.checked) {
    label.classList.add('crossed-out');
    listItem.classList.remove('selected');
  } else {
    label.classList.remove('crossed-out');
  }
};

export default handleCheckboxChange;

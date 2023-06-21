const getListFromDOM = () => {
  const todoList = document.getElementById('todo-list');
  const listItems = Array.from(todoList.querySelectorAll('li'));
  const items = listItems.map((listItem) => {
    const checkbox = listItem.querySelector('input[type="checkbox"]');
    const label = listItem.querySelector('label');
    return {
      description: label.textContent,
      completed: checkbox.checked,
    };
  });
  return items;
};
export default getListFromDOM;

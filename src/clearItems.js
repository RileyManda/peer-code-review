const clearCompletedItems = () => {
  const completedItems = Array.from(
    document.querySelectorAll('.list-items li input[type="checkbox"]:checked'),
  );

  completedItems
    .map((item) => item.closest('li'))
    .filter((li) => li)
    .forEach((li) => {
      li.remove();
    });
};

export default clearCompletedItems;

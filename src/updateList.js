import { handleDragStart } from './dragUtils.js';
import handleCheckboxChange from './checkBox.js';
import moreIcon from './assets/more-vert.png';
import dustbinIcon from './assets/bin-icon.png';

const updateList = (inputValue) => {
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('gray-checkbox');

  const label = document.createElement('label');
  label.textContent = inputValue;

  const moreIconElement = document.createElement('img');
  moreIconElement.src = moreIcon;
  moreIconElement.alt = 'More Icon';
  moreIconElement.classList.add('more-icon');
  moreIconElement.draggable = true;
  moreIconElement.addEventListener('dragstart', handleDragStart);

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(moreIconElement);

  listItem.addEventListener('click', (event) => {
    handleCheckboxChange(event, moreIcon, dustbinIcon);
  });

  return listItem;
};

export default updateList;

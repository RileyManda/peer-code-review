import { saveListToStorage } from './localStorage.js';
import getListFromDOM from './getListDom.js';

const deleteItem = (listItem) => {
  listItem.remove();
  saveListToStorage(getListFromDOM()); // Update storage after an item is removed
};

export default deleteItem;

import addNewListItem from './addItem.js';
import { getListFromStorage, saveListToStorage } from './localStorage.js';
import renderListItem from './getListDom.js';

jest.mock('./getListFromStorage.js', () => jest.fn());
jest.mock('./setLocalStorage.js', () => jest.fn());
jest.mock('./renderListItem.js', () => jest.fn());

describe('addNewListItem', () => {
  test('should add a new item to the localStorage', () => {
    const event = { preventDefault: jest.fn() };

    getListFromStorage.mockReturnValueOnce([]);

    addNewListItem(event, 'Item 1');

    // Assertions
    expect(event.preventDefault).toHaveBeenCalled();
    expect(getListFromStorage).toHaveBeenCalled();
    expect(saveListToStorage).toHaveBeenCalledWith([
      { description: 'Item 1', completed: false, index: 1 },
    ]);
    expect(renderListItem).toHaveBeenCalled();
  });
});
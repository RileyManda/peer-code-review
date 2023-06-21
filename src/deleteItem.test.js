import deleteItem from './deleteItem.js';
import { saveListToStorage } from './localStorage.js';
import getListFromDOM from './getListDom.js';

// Mock the necessary dependencies
jest.mock('./localStorage.js', () => ({
  saveListToStorage: jest.fn(),
}));

jest.mock('./getListDom.js', () => jest.fn());

describe('deleteItem', () => {
  test('should remove the listItem and update the storage', () => {
    // Create a dummy listItem
    const listItem = document.createElement('li');

    // Mock the necessary functions
    getListFromDOM.mockReturnValueOnce(['item1', 'item2']); // Mock the return value of getListFromDOM

    // Call the deleteItem function
    deleteItem(listItem);

    // Assertions
    expect(listItem.remove).toHaveBeenCalled();
    expect(getListFromDOM).toHaveBeenCalled();
    expect(saveListToStorage).toHaveBeenCalledWith(['item1', 'item2']);
  });
});

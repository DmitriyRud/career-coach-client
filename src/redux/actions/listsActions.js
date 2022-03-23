export const allFromLists = (items) => {
  return {
    type:'ALL_ITEMS_LIST',
    payload: items
  }
}

export const deleteItemFromList = (itemId) => {
  console.log('deleteItem', itemId)
  return {
    type: 'DELETE_ITEM_LIST',
    payload: itemId,
  };
};

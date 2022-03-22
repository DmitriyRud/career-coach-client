const initialState = [];

const listsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ALL_ITEMS_LIST':
      return payload;
    case 'DELETE_ITEM_LIST':
      return state.filter(el => el.id !== payload)
    
    default:
      return state;
  }
}

export default listsReducer;

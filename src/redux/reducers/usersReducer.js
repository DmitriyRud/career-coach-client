const usersReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'LOGIN USER':
      return payload;
    case 'EDIT_PROFILE':
      return payload;      
    default:
      return state;
  }
};

export default usersReducer;

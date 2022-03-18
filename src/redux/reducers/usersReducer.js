const usersReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'LOGIN USER':
      return payload;
    default:
      return state;
  }
};

export default usersReducer;

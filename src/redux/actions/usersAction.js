export const loginUser = (data) => {
  return {
    type: 'LOGIN USER',
    payload: data,
  };
};

export const editProfile = (data) => {
  return {
    type: 'EDIT_PROFILE',
    payload: data,
  };
};



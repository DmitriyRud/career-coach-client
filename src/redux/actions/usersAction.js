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


export const getUserData = (data) => {
  return {
    type: 'GET_DATA',
    payload: data
  }
}

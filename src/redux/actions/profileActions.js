export const showUser = (userId) => {
  return {
    type: 'SHOW_USER',
    payload: userId,
  };
};

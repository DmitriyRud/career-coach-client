import { deleteItemFromList } from '../actions/listsActions';

export const deleteFromList = (id, userId) => {
  console.log(id, userId)
  return async (dispatch) => {
    await fetch(`/helper/whitelist/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({userId}),
    }
    );
    dispatch(deleteItemFromList(id));
  };
};

export const deleteFromBlackList = (id, userId) => {
  console.log(id, userId)
  return async (dispatch) => {
    await fetch(`/helper/blacklist/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({userId}),
    }
    );
    dispatch(deleteItemFromList(id));
  };
};

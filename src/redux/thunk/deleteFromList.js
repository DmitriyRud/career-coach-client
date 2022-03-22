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

export const deleteAllBlackList = (userId) => {
  return async (dispatch) => {
    await fetch('/helper/delete/blacklist', {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({userId}),
    }
    );
    //dispatch(deleteItemFromList(id));
  };
};

export const deleteAllWhiteList = (userId) => {
  return async (dispatch) => {
    await fetch('/helper/delete/whitelist', {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({userId}),
    }
    );
    //dispatch(deleteItemFromList(id));
  };
};

import { deleteItemFromList, allFromLists} from '../actions/listsActions';

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

export const allFromWhiteList = (userId) => {
  return async (dispatch) => {
    const response = await fetch (`/helper/whitelist/${userId}`);
    console.log('response,', response)
    if (response.ok) {
      const whiteList = await response.json();
      console.log('whitelist', whiteList);
      await dispatch(allFromLists(whiteList))
    }
  }
}


// export const deleteAllBlackList = (userId) => {
//   return async (dispatch) => {
//     await fetch('/helper/delete/blacklist', {
//       method: 'DELETE',
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({userId}),
//     }
//     );
//     //dispatch(deleteItemFromList(id));
//   };
// };

// export const deleteAllWhiteList = (userId) => {
//   return async (dispatch) => {
//     await fetch('/helper/delete/whitelist', {
//       method: 'DELETE',
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({userId}),
//     }
//     );
//     //dispatch(deleteItemFromList(id));
//   };
// };

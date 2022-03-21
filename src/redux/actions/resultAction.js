export const getResult = (data) => {
  return {
    type: 'ADD_RESULT',
    payload: data
  }
}

export const getReport = (data) => {
  return {
    type: 'ADD_REPORT',
    payload: data
  }
}

export const getAllResultUser = (data) => {
  //console.log('data ======> ', data);
  return {
    type: 'GET_ALL_RESULT',
    payload: data,
  }
}

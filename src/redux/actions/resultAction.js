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

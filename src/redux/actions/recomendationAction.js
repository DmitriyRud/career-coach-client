export const getRecomendation = (data) => {
  return {
    type: 'GET_RECOM',
    payload: data,
  }
}

export const addRecomendation = (data) => {
  return {
    type: 'ADD_RECOM',
    payload: data,
  }
}

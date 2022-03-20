const initState = {
  recom: []
}

const recomendationReducer = (state = initState, action) => {
  const {type, payload} = action; // payload = [skill, skill, skill]
  switch (type) {
    case 'GET_RECOM':
      return {recom: payload}
    default:
      return state;
  }
}

export default recomendationReducer;

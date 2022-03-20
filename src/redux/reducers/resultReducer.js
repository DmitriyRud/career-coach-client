
const initState = {
  result: {},
  resultAll: [],
  report: []
};

const resultReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_RESULT':
      return {...state, result: payload};
    case 'ADD_REPORT':
      return {...state, report: payload};
    case 'GET_ALL_RESULT':
      return {...state, resultAll: payload};
    default:
      return state
  }
}

export default resultReducer;

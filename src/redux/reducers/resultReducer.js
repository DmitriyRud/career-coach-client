
const initState = {
  result: {},
  report: []
};

const resultReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_RESULT':
      return {...state, result: payload};
    case 'ADD_REPORT':
      return {...state, report: payload};
    default:
      return state
  }
}

export default resultReducer;

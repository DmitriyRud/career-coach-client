
const initState = {
  vacancies: []
}

const vacancyReducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'GET_VACANCIES':
      return { vacancies: payload }
    default:
      return state;
  }
}

export default vacancyReducer;

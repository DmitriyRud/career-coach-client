
const initState = {
  whiteList: [],
  blackList: [],
  userSkills: [],
  myPlans: [],
}

const userData = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'GET_DATA':
      return payload;
    default:
      return state;
  }
}

export default userData;

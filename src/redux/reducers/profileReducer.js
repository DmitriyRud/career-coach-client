const initState = {
  fio: false,
  email: false,
  password: false,
}

const profileReducer = (state = initState, action) => {
  const {type, payload} = action; // payload = [skill, skill, skill]
  switch (type) {
    case 'SET_FIO':
      return {...state, fio: payload}
    case 'SET_EMAIL':
      return {...state, email: payload}
    case 'SET_PASSWORD':
      return {...state, password: payload}
    default:
      return state;
  }
}

export default profileReducer;

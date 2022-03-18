const initialState = [];

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SHOW_USER':
      return state.filter(el => el.id === payload);

    default: 
      return state;  
  }
}

export default profileReducer;

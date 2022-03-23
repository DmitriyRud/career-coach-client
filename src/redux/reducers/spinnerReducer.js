import { DISABLE_SPINNER, ENABLE_SPINNER } from '../types/spinner';

// eslint-disable-next-line default-param-last
const spinnerReducer = (state = false, action) => {
  switch (action.type) {
    case ENABLE_SPINNER:
      return true;

    case DISABLE_SPINNER:
      return false;

    default:
      return state;
  }
};

export default spinnerReducer;

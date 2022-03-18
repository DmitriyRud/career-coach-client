import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  reducer1: profileReducer,
});

export default rootReducer;

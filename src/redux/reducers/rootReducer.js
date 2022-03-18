import { combineReducers } from 'redux';
//import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({ 
  users: usersReducer,
  // reducer1: profileReducer,
 });

export default rootReducer;

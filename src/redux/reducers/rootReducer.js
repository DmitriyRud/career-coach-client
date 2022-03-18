import { combineReducers } from 'redux';
<<<<<<< HEAD
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  reducer1: profileReducer,
});
=======
import usersReducer from './usersReducer';

const rootReducer = combineReducers({ users: usersReducer });
>>>>>>> development

export default rootReducer;

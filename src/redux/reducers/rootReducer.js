import { combineReducers } from "redux";
import userSkillsReducer from "./userSkillsReducer";
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  userSkills: userSkillsReducer,
  users: usersReducer,
});

export default rootReducer;

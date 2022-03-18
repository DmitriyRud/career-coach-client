import { combineReducers } from "redux";
import userSkillsReducer from "./userSkillsReducer";
import usersReducer from './usersReducer';
import resultReducer from "./resultReducer";

const rootReducer = combineReducers({
  userSkills: userSkillsReducer,
  users: usersReducer,
  result: resultReducer
});

export default rootReducer;

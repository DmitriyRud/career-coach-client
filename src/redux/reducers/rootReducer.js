import { combineReducers } from "redux";
import userSkillsReducer from "./userSkillsReducer";

const rootReducer = combineReducers({
  userSkills: userSkillsReducer,
  users: usersReducer,
});

export default rootReducer;

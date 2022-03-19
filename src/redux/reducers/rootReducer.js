import { combineReducers } from "redux";
import userSkillsLearnReducer from "./userSkillsLearnReducer";
import userSkillsReducer from "./userSkillsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  userSkills: userSkillsReducer,
  userSkillsLearn: userSkillsLearnReducer,
  users: usersReducer,
});

export default rootReducer;

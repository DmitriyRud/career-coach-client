import { combineReducers } from "redux";
import userSkillsReducer from "./userSkillsReducer";

const rootReducer = combineReducers({
  userSkills: userSkillsReducer,
});

export default rootReducer;

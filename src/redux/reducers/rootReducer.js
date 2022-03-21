import { combineReducers } from "redux";
import allSkillsFromBdReducer from './allSkillsFromBdReducer'
import userSkillsLearnReducer from "./userSkillsLearnReducer";
import userSkillsReducer from "./userSkillsReducer";
import usersReducer from "./usersReducer";
import resultReducer from "./resultReducer";
import recomendationReducer from "./recomendationReducer";

const rootReducer = combineReducers({
  allSkilsForSelect: allSkillsFromBdReducer,
  userSkills: userSkillsReducer,
  userSkillsLearn: userSkillsLearnReducer,
  users: usersReducer,
  result: resultReducer,
  recom: recomendationReducer,
});

export default rootReducer;

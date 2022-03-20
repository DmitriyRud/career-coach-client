import { combineReducers } from "redux";
import userSkillsLearnReducer from "./userSkillsLearnReducer";
import userSkillsReducer from "./userSkillsReducer";
import usersReducer from './usersReducer';
import resultReducer from "./resultReducer";
import recomendationReducer from "./recomendationReducer";

const rootReducer = combineReducers({
  userSkills: userSkillsReducer,
  userSkillsLearn: userSkillsLearnReducer,
  users: usersReducer,
  result: resultReducer,
  recom: recomendationReducer,
});

export default rootReducer;

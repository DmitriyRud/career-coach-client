import { combineReducers } from "redux";
import allSkillsFromBdReducer from './allSkillsFromBdReducer'
import userSkillsLearnReducer from "./userSkillsLearnReducer";
import userSkillsReducer from "./userSkillsReducer";
import usersReducer from "./usersReducer";
import resultReducer from "./resultReducer";
import recomendationReducer from "./recomendationReducer";
import vacancyReducer from "./vacancyReducer";
import profileReducer from "./profileReducer";
import listsReducer from "./listsReducer";
import spinnerReducer from "./spinnerReducer";
import userData from "./userDataReducer";

const rootReducer = combineReducers({
  allSkilsForSelect: allSkillsFromBdReducer,
  userSkills: userSkillsReducer,
  userSkillsLearn: userSkillsLearnReducer,
  users: usersReducer,
  result: resultReducer,
  recom: recomendationReducer,
  vacancy: vacancyReducer, 
  button: profileReducer,
  list: listsReducer,
  spinner: spinnerReducer,
  userData,
});

export default rootReducer;

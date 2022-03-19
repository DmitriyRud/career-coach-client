import { ADD_SKILL_IN_SKILL,ADD_SKILL_IN_LEARN, ALL_SKILL_FROM_SKILL } from "../types/userSkills";

const userSkillsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ALL_SKILL_FROM_SKILL:
      return payload;

    case ADD_SKILL_IN_SKILL:
      return [payload, ...state];

    

    default:
      return state;
  }
};

export default userSkillsReducer;

import { ADD_SKILL_IN_LEARN, ALL_SKILL_FROM_LEARN } from "../types/userSkills";

const userSkillsLearnReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ALL_SKILL_FROM_LEARN:
      return payload;

    case ADD_SKILL_IN_LEARN:
      return [payload, ...state];

    default:
      return state;
  }
};

export default userSkillsLearnReducer;

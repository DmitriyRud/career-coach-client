import { ADD_SKILL, ALL_SKILL } from "../types/userSkills";

const userSkillsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ALL_SKILL:
      return payload

    case ADD_SKILL:
      return [ ...state, ...payload ];

    default:
      return state;
  }
};

export default userSkillsReducer;

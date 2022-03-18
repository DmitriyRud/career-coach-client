import { ADD_SKILL } from "../types/userSkills";

const userSkillsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_SKILL:
      return [ ...state, ...payload ];

    default:
      return state;
  }
};

export default userSkillsReducer;

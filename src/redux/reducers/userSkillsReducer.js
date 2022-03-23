import {
  ADD_SKILL_IN_SKILL,
  DELETE_USER_SKILL,
  ALL_SKILL_FROM_SKILL,
  UPDATE_RATE_SKILL
} from "../types/userSkills";

const userSkillsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ALL_SKILL_FROM_SKILL:
      return payload;

    case ADD_SKILL_IN_SKILL:
      return [payload, ...state];

    case DELETE_USER_SKILL:
      return state.filter((el) => el.skill_id !== payload);

    case UPDATE_RATE_SKILL:
      return payload;

    default:
      return state;
  }
};

export default userSkillsReducer;

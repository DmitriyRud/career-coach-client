import {
  ADD_SKILL_IN_LEARN,
  DELETE_USER_LEARN,
  ALL_SKILL_FROM_LEARN,
} from "../types/userSkills";

const userSkillsLearnReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ALL_SKILL_FROM_LEARN:
      return payload;

    case ADD_SKILL_IN_LEARN:
      return [payload, ...state];

    case DELETE_USER_LEARN:
      return state.filter((el) => el.skill_id !== payload);

    default:
      return state;
  }
};

export default userSkillsLearnReducer;

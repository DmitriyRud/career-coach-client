import {
  ADD_SKILL_IN_SKILL,
  DELETE_USER_SKILL,
  ALL_SKILL_FROM_SKILL,
  UPDATE_RATE_SKILL,
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
      return state.map((el) =>
        el.user_id === payload.user_id && el.skill_id === payload.skill_id
          ? { ...el, rate: payload.rate}
          : el
      );

    default:
      return state;
  }
};

export default userSkillsReducer;

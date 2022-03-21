import { ALL_SKILL_FOR_SELECT } from "../types/userSkills";

const allSkillsFromDB = (state = [], { type, payload }) => {
  switch (type) {
    case ALL_SKILL_FOR_SELECT:
      return payload;

    default:
      return state;
  }
};
export default allSkillsFromDB;

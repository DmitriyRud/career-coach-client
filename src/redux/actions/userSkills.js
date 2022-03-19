import {
  ADD_SKILL_IN_SKILL,
  ADD_SKILL_IN_LEARN,
  ALL_SKILL_FROM_SKILL,
  ALL_SKILL_FROM_LEARN
} from "../types/userSkills";

export const allSkillsFromSkills = (id) => async (dispatch, setState) => {
  const response = await fetch(
    `http://localhost:3001/users/profile/allUserSkillsFromSkills/${id}`
  );
  const allUserSkillFromServer = await response.json();
  const result = allUserSkillFromServer.map((el) => el.Skill.skill);
  dispatch({
    type: ALL_SKILL_FROM_SKILL,
    payload: result,
  });
};

export const allSkillsFromLearn = (id) => async (dispatch, setState) => {
  const response = await fetch(
    `http://localhost:3001/users/profile/allUserSkillsFromLearn/${id}`
  );
  const allUserSkillFromServer = await response.json();
  const result = allUserSkillFromServer.map((el) => el.Skill.skill);
  dispatch({
    type: ALL_SKILL_FROM_LEARN,
    payload: result,
  });
};

export const addSkillinSkill = (skill) => async (dispatch, setState) => {
  const response = await fetch(
    "http://localhost:3001/users/profile/adduserskillskill",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skill }),
    }
  );

  const newSkillFromServer = await response.json();
  
  dispatch({
    type: ADD_SKILL_IN_SKILL,
    payload: newSkillFromServer,
  });
};

export const addSkillinLearn = (skill) => async (dispatch, setState) => {
  const response = await fetch(
    "http://localhost:3001/users/profile/adduserskilllearn",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skill }),
    }
  );

  const newSkillFromServer = await response.json();
  dispatch({
    type: ADD_SKILL_IN_LEARN,
    payload: newSkillFromServer,
  });
};

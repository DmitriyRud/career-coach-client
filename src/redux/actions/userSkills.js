import {
  ADD_SKILL_IN_SKILL,
  ADD_SKILL_IN_LEARN,
  ALL_SKILL_FROM_SKILL,
  ALL_SKILL_FROM_LEARN,
  DELETE_USER_SKILL,
  DELETE_USER_LEARN,
} from "../types/userSkills";

export const allSkillsFromSkills = (id) => async (dispatch, setState) => {
  const response = await fetch(`/users/profile/allUserSkillsFromSkills/${id}`);
  const allUserSkillFromServer = await response.json();
  const result = allUserSkillFromServer.map((el) => {
    return {
      skill: el.Skill.skill,
      skill_id: el.skill_id,
      user_id: el.user_id,
      category: "skills",
    };
  });
  console.log("====", result);
  dispatch({
    type: ALL_SKILL_FROM_SKILL,
    payload: result,
  });
};

export const allSkillsFromLearn = (id) => async (dispatch, setState) => {
  const response = await fetch(`/users/profile/allUserSkillsFromLearn/${id}`);
  const allUserSkillFromServer = await response.json();
  const result = allUserSkillFromServer.map((el) => {
    return {
      skill: el.Skill.skill,
      skill_id: el.skill_id,
      user_id: el.user_id,
      category: "learn",
    };
  });
  dispatch({
    type: ALL_SKILL_FROM_LEARN,
    payload: result,
  });
};

export const addSkillinSkill = (skill) => async (dispatch, setState) => {
  const response = await fetch("/users/profile/adduserskillskill", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ skill }),
  });

  const newSkillFromServer = await response.json();
  console.log(newSkillFromServer);

  dispatch({
    type: ADD_SKILL_IN_SKILL,
    payload: newSkillFromServer,
  });
};

export const addSkillinLearn = (skill) => async (dispatch, setState) => {
  const response = await fetch("/users/profile/adduserskilllearn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ skill }),
  });

  const newSkillFromServer = await response.json();
  console.log(newSkillFromServer);
  dispatch({
    type: ADD_SKILL_IN_LEARN,
    payload: newSkillFromServer,
  });
};

export const deleteUserSkill =
  (user_id, skill_id) => async (dispatch, setState) => {
    const response = await fetch("/users/profile/deleteuserskill", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user_id, skill_id }),
    });

    const skillId = await response.json();
    dispatch({
      type: DELETE_USER_SKILL,
      payload: skillId,
    });
  };

export const deleteUserLearn =
  (user_id, skill_id) => async (dispatch, setState) => {
    const response = await fetch("/users/profile/deleteuserlearn", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user_id, skill_id }),
    });

    const skillId = await response.json();
    dispatch({
      type: DELETE_USER_LEARN,
      payload: skillId,
    });
  };

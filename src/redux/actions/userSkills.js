import {
  ADD_SKILL_IN_SKILL,
  ADD_SKILL_IN_LEARN,
  ALL_SKILL_FROM_SKILL,
  ALL_SKILL_FROM_LEARN,
  ALL_SKILL_FOR_SELECT,
  DELETE_USER_SKILL,
  DELETE_USER_LEARN,
} from "../types/userSkills";

export const allSkillsFromSelect = () => async (dispatch, setState) => {
  try {
    const response = await fetch("/users/profile/allskillsforskillsselect");
    const allSkills = await response.json();
    console.log('+++++',allSkills);
    dispatch({
      type: ALL_SKILL_FOR_SELECT,
      payload: allSkills,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const allSkillsFromSkills = (id) => async (dispatch, setState) => {
  try {
    const response = await fetch(
      `/users/profile/allUserSkillsFromSkills/${id}`
    );
    const allUserSkillFromServer = await response.json();
    //console.log('allUserSkillFromServer ===== >', allUserSkillFromServer);
    const result = allUserSkillFromServer.map((el) => {
      return {
        skill: el.Skill.skill,
        skill_id: el.skill_id,
        user_id: el.user_id,
        skill_rate: el.rate,
        category: "skills",
      };
    });
    // console.log("====", result);
    dispatch({
      type: ALL_SKILL_FROM_SKILL,
      payload: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const allSkillsFromLearn = (id) => async (dispatch, setState) => {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
};

export const addSkillinSkill = (skill) => async (dispatch, setState) => {
  try {
    const response = await fetch("/users/profile/adduserskillskill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skill }),
    });

    const newSkillFromServer = await response.json();
    // console.log('newSkillFromServer',newSkillFromServer);

    dispatch({
      type: ADD_SKILL_IN_SKILL,
      payload: newSkillFromServer,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addSkillinLearn = (skill) => async (dispatch, setState) => {
  try {
    const response = await fetch("/users/profile/adduserskilllearn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skill }),
    });

    const newSkillFromServer = await response.json();
   console.log('newSkillFromServer-2',newSkillFromServer);

    dispatch({
      type: ADD_SKILL_IN_LEARN,
      payload: newSkillFromServer,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUserSkill =
  (user_id, skill_id) => async (dispatch, setState) => {
    try {
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
    } catch (error) {
      console.log(error.message);
    }
  };

export const deleteUserLearn =
  (user_id, skill_id) => async (dispatch, setState) => {
    try {
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
    } catch (error) {
      console.log(error.message);
    }
  };

import { ADD_SKILL, ALL_SKILL } from "../types/userSkills";

export const allSkills = (skills) => (dispatch, setState) => {
  
  // const response = await fetch("http://localhost:3001/profile/alluserskill", {
  //   method: 'POST', 
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ skills }),
  // })

};

export const addSkill = (skill) => async (dispatch, setState) => {
  // console.log(skill);
  const response = await fetch("http://localhost:3001/profile/adduserskill", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ skill }),
  });

  const newSkillFromServer = await response.json();
  dispatch({
    type: ADD_SKILL,
    payload: newSkillFromServer,
  });
};

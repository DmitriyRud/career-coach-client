import { getRecomendation } from "../actions/recomendationAction";

function contains(arr, elem) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].skill === elem) {
      return true;
    }
  }
  return false;
}

export const getRecomendationAT = (result_id, user_id, skills, allResults) => {
  return async (dispatch) => {
    const reportSkillsDESC = allResults.sort((a, b) => b[1] - a[1]);
    const toLearn = [];
    for (let i = 0; i < reportSkillsDESC.length && i < 5; i++) {
      if (!contains(skills, reportSkillsDESC[i][0]))
        toLearn.push(reportSkillsDESC[i][0]);
    }
    let skillsASC = skills.sort((a, b) => a.skill_rate - b.skill_rate);
    let skillsASC5 = skillsASC.slice(0, 5);

    const toImprove = [];
    for (let i = 0; i < reportSkillsDESC.length && i < 5; i++) {
      if (contains(skillsASC5, reportSkillsDESC[i][0]))
        toImprove.push(reportSkillsDESC[i][0]);
    }

    let skillsDESC = skills.sort((a, b) => b.skill_rate - a.skill_rate);
    let skillsDESC5 = skillsDESC.slice(0, 5);
    let skillsDESCnext5 = skillsDESC.slice(5, 10);
    dispatch(
      getRecomendation({ toLearn, toImprove, skillsDESC5, skillsDESCnext5 })
    );

    
  };
};

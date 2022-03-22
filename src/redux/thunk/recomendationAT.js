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
    //console.log('getRecomendationAT =====>>>>', result_id );
    //const response = await fetch(`/helper/recomendation/${result_id}`)
    console.log('userId = ', user_id);
    console.log('skills:', skills);
    const reportSkillsDESC = allResults.sort((a, b) => b[1] - a[1]);
    console.log('allResultsDESC: ', reportSkillsDESC);
    const toLearn = [];
    for (let i = 0; (i < reportSkillsDESC.length && i < 5); i++) {
      //console.log(`reportSkillsDESC[${i}][0] = `, reportSkillsDESC[i][0]);
      if ( !contains(skills, reportSkillsDESC[i][0]) ) toLearn.push(reportSkillsDESC[i][0]);
    }
    console.log('toLearn = ', toLearn);
    let skillsASC = skills.sort((a, b) => a.skill_rate - b.skill_rate);
    console.log('skillsASC = ', skillsASC);
    let skillsASC5 = skillsASC.slice(0, 5);
    console.log('skillsASC5 = ', skillsASC5);

    const toImprove = [];
    for (let i = 0; (i < reportSkillsDESC.length && i < 5); i++) {
      if ( contains(skillsASC5, reportSkillsDESC[i][0]) ) toImprove.push(reportSkillsDESC[i][0]);
    }
    console.log('toImprove = ', toImprove);

    let skillsDESC = skills.sort((a, b) => b.skill_rate - a.skill_rate);
    //console.log('skillsASC = ', skillsDESC);
    let skillsDESC5 = skillsDESC.slice(0, 5);
    console.log('skillsDESC5 = ', skillsDESC5);
    let skillsDESCnext5 = skillsDESC.slice(5, 10);
    console.log('skillsDESCnext5 = ', skillsDESCnext5);
    dispatch(getRecomendation({toLearn, toImprove, skillsDESC5, skillsDESCnext5}));

    //const userSkills = 
    // if(response.ok) {
    //   const data = await response.json();
    // //  dispatch(getRecomendation(data))
    // }
  }
}

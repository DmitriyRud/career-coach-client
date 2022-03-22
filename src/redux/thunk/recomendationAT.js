import { getRecomendation } from "../actions/recomendationAction";
import { getResult } from "../actions/resultAction";
import { getReportAT } from "./resultAT";

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

export const getRecomendationAT = (result_id, user_id, skills, allResults) => {
  return async (dispatch) => {
    console.log('getRecomendationAT =====>>>>', result_id );
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


    //const userSkills = 
    // if(response.ok) {
    //   const data = await response.json();
    // //  dispatch(getRecomendation(data))
    // }
  }
}

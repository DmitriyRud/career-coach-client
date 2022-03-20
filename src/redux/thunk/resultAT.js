import { getResult, getReport, getAllResultUser } from "../actions/resultAction";

// data это id из Results
export const getResultAT = (data) => {
  return async (dispatch) => {
    // console.log('thunk result ', data);
    const response = await fetch(`/helper/result/${data}`)
    if (response.ok) {
      const answer = await response.json()
      // console.log('ANSWER ', answer);
      dispatch(getResult(answer))
    }
  }
}

// data это result_id
export const getReportAT = (data) => {
  // console.log('thunk report ', data);
  return async (dispatch) => {
    const response = await fetch(`/helper/report/${data}`)
    // console.log('thunk report response ', response);
    
    if (response.ok) {
      const answer = await response.json()
      dispatch(getReport(answer))
    }
  }
}


export const addSkillWhiteList = (skill) => {
  return async (dispatch) => {
    console.log('SKILL WhList >>', skill);
    const response = await fetch(`/helper/whitelist`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({skill}),
    })
  }
}

export const addSkillBlackList = (skill) => {
  return async (dispatch) => {
    console.log('SKILL BlList >>', skill);
    const response = await fetch(`/helper/blacklist`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({skill}),
    })
  }
}

export const addUserSkill = (skill) => {
  return async (dispatch) => {
    console.log('SKILL addUserSkill >>', skill);
    const response = await fetch(`/helper/userskill`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({skill}),
    })
  }
}

export const addMyPlans = (skill) => {
  return async (dispatch) => {
    console.log('SKILL addMyPlans >>', skill);
    const response = await fetch(`/helper/userplans`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({skill}),
    })
  }
}

export const getAllResultUserAT = (user_id) => {
  return async (dispatch) => {
    // console.log('getAllResultUserAT user_id >>', user_id);
    const response = await fetch(`/helper/result/user/${user_id}`)
    if(response.ok) {
      const data = await response.json();
      // console.log('getAllResultUserAT response>>>', data);
      dispatch(getAllResultUser(data))
    }
  }
}

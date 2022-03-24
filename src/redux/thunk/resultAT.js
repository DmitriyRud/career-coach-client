import { getResult, getReport, getAllResultUser } from "../actions/resultAction";

// data это id из Results
export const getResultAT = (data) => {
  return async (dispatch) => {
    const response = await fetch(`/helper/result/${data}`)
    if (response.ok) {
      const answer = await response.json()
      dispatch(getResult(answer))
    }
  }
}

// data это result_id
export const getReportAT = (data) => {
  return async (dispatch) => {
    const response = await fetch(`/helper/report/${data}`)
    
    if (response.ok) {
      const answer = await response.json()
      dispatch(getReport(answer))
    }
  }
}


export const addSkillWhiteList = (skill) => {
  return async (dispatch) => {
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
    const response = await fetch(`/helper/result/user/${user_id}`)
    if(response.ok) {
      const data = await response.json();
      data.sort((a, b) => b.id -a.id)
      dispatch(getAllResultUser(data));
    }
  }
}

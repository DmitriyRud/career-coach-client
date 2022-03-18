import { getResult, getReport } from "../actions/resultAction";

// data это id из Results
export const getResultAT = (data) => {
  return async (dispatch) => {
    // console.log('thunk result ', data);
    const response = await fetch(`helper/result/${data}`)
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
    const response = await fetch(`helper/report/${data}`)
    // console.log('thunk report response ', response);
    
    if (response.ok) {
      const answer = await response.json()
      dispatch(getReport(answer))
    }
  }
}

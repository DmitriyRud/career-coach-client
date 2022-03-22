import { getRecomendation } from "../actions/recomendationAction";

export const getRecomendationAT = (result_id) => {
  return async (dispatch) => {
    // console.log('getRecomendationAT >>>>', result_id );
    const response = await fetch(`/helper/recomendation/${result_id}`)
    if(response.ok) {
      const data = await response.json()
      dispatch(getRecomendation(data))
    }
  }
}

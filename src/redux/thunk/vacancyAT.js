import { getVacancies } from "../actions/vacancyAction";

export const getVacanciesAT = (user_id) => {
  return async (dispatch) => {
    // console.log('getVacanciesAT >>> ', user_id);
    const response = await fetch(`/helper/vacancies/${user_id}`);
    if(response.ok) {
      const answer = await response.json();
      // console.log('getVacanciesAT answer >> ', answer);
      dispatch(getVacancies(answer))
    }
  }
}

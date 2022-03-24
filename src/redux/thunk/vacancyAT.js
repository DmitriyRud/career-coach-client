import { getVacancies } from "../actions/vacancyAction";

export const getVacanciesAT = (user_id) => {
  return async (dispatch) => {
    const response = await fetch(`/helper/vacancies/${user_id}`);
    if (response.ok) {
      const answer = await response.json();
      dispatch(getVacancies(answer));
    }
  };
};

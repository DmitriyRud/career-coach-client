import { getVacancies } from "../actions/vacancyAction";

export const getVacanciesAT = (user_id) => {
  return async (dispatch) => {
    console.log('getVacanciesAT >>> ', user_id);
    const response = await fetch(`/helper/vacancies/${user_id}`);
    console.log('getVacanciesAT response >> ', response);

    // заглушка
    dispatch(getVacancies([{
      title: 'Middle/Senior JavaScript Developer (Мальта, Сент-Джулианс)',
      company: 'Alex Staff Agency',
      url: 'https://hh.ru/vacancy/51990194?from=vacancy_search_list&hhtmFrom=vacancy_search_list&query=Junior%20javascript',
    }]))
  }
}

export const getVacancies = (vacancies) => {
  return {
    type: 'GET_VACANCIES',
    payload: vacancies,
  }
}

import React from "react";
import VacanciesItem from "../VacanciesItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getVacanciesAT } from "../../redux/thunk/vacancyAT";
import { useDispatch } from "react-redux";
import './VacanciesList.css';

const VacanciesList = () => {
  const user = useSelector((store) => store.users);
  const vacancies = useSelector((store) => store.vacancy.vacancies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVacanciesAT(user.id))
  }, [])
  return ( 
      <div className="vacancies-list-container">
        <h1>
          Вакансии, лучше всего подходящие тебе по требуемым навыкам:
        </h1>
        {vacancies?.map((vacancy) => {
          return (
            <VacanciesItem
              key={vacancy.url}
              title={vacancy.job_title}
              company={vacancy.company}
              url={vacancy.url}
              salary={vacancy.salary} />
          )
        })}
      </div>
   );
}
 
export default VacanciesList;

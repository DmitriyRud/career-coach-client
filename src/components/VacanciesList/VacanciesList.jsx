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
  console.log('VacanciesList >> ', vacancies);
  console.log(user);
  useEffect(() => {
    dispatch(getVacanciesAT(user.id))
  }, [])
  return ( 
    <div className="main-page">
      <div className="vacancies-list-container">
        <h1>
          ТОП вакансий, подходящих по вашему запросу:
        </h1>
        {vacancies?.map((vacancy) => {
          return (
            <VacanciesItem
              key={vacancy.url}
              title={vacancy.title}
              company={vacancy.company}
              url={vacancy.url} />
          )
        })}
      </div>
    </div>
   );
}
 
export default VacanciesList;

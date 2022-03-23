import React from "react";
// import { Button } from 'antd';
import './VacanciesItem.css'

const VacanciesItem = ({ title, company, url, salary }) => {
  return ( 
      <a type="link" href={url} target='_blank' rel="noreferrer">
    <div className="vacancy-div">
        <div>
          {title}
        </div>
        &nbsp;
        &nbsp;
        <div>
          {`Компания: ${company}`}
        </div>
        &nbsp;
        &nbsp;
        <div>
          {salary}
        </div>
    </div>
      </a>
   );
}
 
export default VacanciesItem;

import React from "react";
// import { Button } from 'antd';
import './VacanciesItem.css'

const VacanciesItem = ({ title, company, url }) => {
  return ( 
    <div className="vacancy-div">
      <a type="link" href={url} target='_blank' rel="noreferrer">
        <div>
          {title}
        </div>
        <div>
          {`Компания: ${company}`}
        </div>
      </a>
    </div>
   );
}
 
export default VacanciesItem;

import React from "react";
// import { Button } from 'antd';
import './VacanciesItem.css'

const VacanciesItem = ({ title, company, url, salary }) => {
  return (
    <div className="vacancy-div">
      <div className="vacancy-title">
        <a type="link" href={url} target='_blank' rel="noreferrer">
          {title}
        </a>
      </div>
      <div className="company-title">
        {company}
      </div>
      <div className="salary-title">
        {salary}
      </div>
    </div>
  );
}

export default VacanciesItem;

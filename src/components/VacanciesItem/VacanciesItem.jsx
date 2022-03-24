import React from "react";
// import { Button } from 'antd';
import './VacanciesItem.css'

function replacer(match, p1, p2, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2].join(' ');
}

const VacanciesItem = ({ title, company, url, salary }) => {
  salary = salary.replace(/(\d+)(\d{3,})/gm, replacer);
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllResultUserAT } from '../../redux/thunk/resultAT';
import './styles.modules.css';
import { MessageTwoTone } from '@ant-design/icons';

function replacer(match, p1, p2, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2].join(' ');
}

const AllReports = () => {
  const user = useSelector((store) => store.users);
  const allResults = useSelector((store) => store.result.resultAll);
  const dispatch = useDispatch();

  //console.log({allResults});

  useEffect(() => {
    dispatch(getAllResultUserAT(user.id));

  }, []);
  
  let navItems = Array.from(document.querySelectorAll('.ant-menu-item'));
  navItems.map((el) => el?.classList.remove('ant-menu-item-selected'));
  document.querySelectorAll('.ant-menu-item')[3]?.classList.add('ant-menu-item-selected');
 
  return (
    <div className="main-page column-container flex-column-start">
      <div className="headers">
        <h1 className='width-60'>Отчеты</h1>
        <h1 className='width-10'>Рекомендации</h1>
      </div>
      <div className="history-page no-border full-width">
        <div className='history-container flex-row-between'>
          <ul className='profile-history full-width all-reports-line'>
            {allResults.length !== 0 ?
              allResults.map((el) => {
                const salary = el.salary? el.salary.replace(/(\d+)(\d{3,})/gm, replacer):'--';

                return (

                  <li key={el.createdAt} className="li-flex-between">
                    <div className="job-title-div width-40">
                      <Link to={`/result/${el.id}`}>
                        {el.search_string}
                      </Link></div>
                    <div className="city-title-div width-15">{el.city}</div>
                    <div className="salary-title-div width-10">{salary}</div>
                    <div className="days-title-div width-10">{el.period} дней</div>
                    <div className="job-time-div width-15">{el.createdAt.slice(0, 10)} / {el.createdAt.slice(11, 19)}</div>
                    <div className='width-10 flex-row-center'>
                      <Link to={`/recomendation/${el.id}`}>
                        <MessageTwoTone size={'large'} style={{fontSize:'1.5em'}}/>
                      </Link>
                    </div>
                  </li>

                )
              })
              :
              <h2>Ты еще не сделал анализ рынка вакансий - жду результатов...</h2>
            }
          </ul>

        </div>

      </div>
    </div>
  );
}

export default AllReports;

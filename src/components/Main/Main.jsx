import React from 'react';
import '../Main/styles.modules.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { Button } from 'antd';
import { DatabaseTwoTone, FundTwoTone, BookTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import VacanciesList from '../VacanciesList';
import { getVacanciesAT } from '../../redux/thunk/vacancyAT';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Main = () => {
  const user = useSelector((store) => store.users);
  const userName = (user.fio)? user.fio : user.name;
  let navigate = useNavigate();

  const skillsClickHandler = () => {
    navigate("users/profile/skills");
  };

  const profileClickHandler = () => {
    navigate("users/profile");
  };

  const analizeClickHandler = () => {
    navigate("/search");
  };

  // состояние для спиннера
  const [isLoading, setIsLoading] = useState(true);
  // смотрим, добавил ли пользователь скиллы:
  const [skills, setSkills] = useState(false); 

  const vacancies = useSelector((store) => store.vacancy.vacancies);
  const dispatch = useDispatch();
  console.log('VacanciesList >> ', vacancies);
  // console.log(user);
  useEffect(() => {
    dispatch(getVacanciesAT(user.id))
  }, [])
  
  useEffect(() => {
    setIsLoading(true);
    const searchSkills = async() => {
      const response = await fetch(`/users/profile/allUserSkillsFromSkills/${user.id}`);
      const res = await response.json()
      if (response.ok && res.length!==0) {
        setSkills(true);
        
      }
      setIsLoading(false);
    }
    searchSkills();
    let navItems = Array.from(document.querySelectorAll('.ant-menu-item'));
    navItems.map((el)=>el.classList.remove('ant-menu-item-selected'));
    document.querySelectorAll('.ant-menu-item')[0].classList.add('ant-menu-item-selected');
  
  },[])

// проверяем, делал ли пользователь запросы поиска
const [isSearch, setIsSearch] = useState(false); 

useEffect(() => {
  setIsLoading(true);
  const isSearchMade = async() => {
  const response = await fetch(`/helper/result/user/${user.id}`);
  const res = await response.json()
  // console.log('search > ', res)
  if (response.ok && res.length!==0) {
    setIsSearch(true);
    
  }
  setIsLoading(false);
}
isSearchMade();
},[])


  return ( 
    <div className="main-page">
      <h1>Привет, {userName}!</h1>
      <h2>Я твой карьерный коуч. С моей помощью ты быстро построишь головокружительную карьеру!</h2>
      {/* Здесь нужно вставить проверку: если скилы не добавлены, выводить этот блок: */}
      <div className="profile-line">
        <p>В своем профиле ты можешь добавить или изменить информацию о себе, а также посмотреть рекомендации по предыдущим запросам:</p>
        <Button type="primary" shape="round" icon={<BookTwoTone />} size={'large'} onClick={profileClickHandler}>
        Редактировать свой профиль
        </Button>
      </div>
     <div className="skills-line"> 
      {isLoading ? <Spin indicator={antIcon} /> : skills ? 
        (<><p>В твоем профиле уже есть навыки. Можешь добавить новые или изменить текущие по кнопке:</p>
        <Button type="primary" shape="round" icon={<DatabaseTwoTone />} size={'large'} onClick={skillsClickHandler}>
        Редактировать свои навыки
        </Button></>)
      : (<><p>В твоем профиле еще нет навыков. Нужно их добавить, чтобы я смог рекомендовать тебе лучшие вакансии:</p>

        <Button type="primary" shape="round" icon={<DatabaseTwoTone />} size={'large'} onClick={skillsClickHandler}>
          Заполнить таблицу навыков
        </Button></>)
      }
      </div>

      {/* Здесь нужно вставить проверку: если анализ не проводился, выводить этот блок: */}
      <div className="analize-line">
        {isLoading ? <Spin indicator={antIcon} /> : !isSearch ? 
        (<> <p>Попробуй проанализировать рынок вакансий - это самый мощный мой инструмент. Проведя анализ, мы с тобой поймем, какие навыки требуются работодателям,
          какие из них тебе нужно указать в резюме и портфолио, чтобы тебя точно взяли на работу!
        </p>
        <Button type="primary" shape="round" icon={<FundTwoTone />} size={'large'} onClick={analizeClickHandler}>
          Начать анализ рынка вакансий
        </Button>
        </>)
      : (<><p>Проведи новый анализ рынка вакансий, нажав на кнопку:
        </p>
        <Button type="primary" shape="round" icon={<FundTwoTone />} size={'large'} onClick={analizeClickHandler}>
        Провести новый анализ рынка вакансий
        </Button></>
        )}      
      </div>
  
      {/* Если навыки добавлены и проводился хотя бы один анализ, нужно выводить в следующем блоке подходящие вакансии : */}
      {vacancies.length > 0 && <VacanciesList />}
      
    </div>
   );
}
 
export default Main;

import './Main.css';
import { useSelector } from 'react-redux'; 
import { Button } from 'antd';
import { DatabaseTwoTone, FundTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import VacanciesList from '../VacanciesList';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Main = () => {
  const user = useSelector((store) => store.users);
  const userName = (user.fio)? user.fio : user.name;
  let navigate = useNavigate();

  const skillsClickHandler = () => {
    navigate("users/profile/skills");
  };

  const analizeClickHandler = () => {
    navigate("/search");
  };

  // состояние для спиннера
  const [isLoading, setIsLoading] = useState(true);
  // смотрим, добавил ли пользователь скиллы:
  const [skills, setSkills] = useState(false);  

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
      <h2>Привет, {userName}!</h2>
      <p>Я твой карьерный коуч. Ты сделал(а) правильный выбор! Давай начнем строить твою карьеру!</p>
      {/* Здесь нужно вставить проверку: если скилы не добавлены, выводить этот блок: */}
     <div className="skills-line"> 
      {isLoading ? <Spin indicator={antIcon} /> : skills ? 
        (<><p>Ты уже добавил(а) навыки в свой профиль. Можешь добавить новые или изменить текущие по кнопке:</p>
        <Button type="primary" shape="round" icon={<DatabaseTwoTone />} size={'large'} onClick={skillsClickHandler}>
        Редактировать свои навыки
        </Button></>)
      : (<><p>Ты еще не добавил(а) в свой профиль навыки. Давай это сделаем, чтобы я смог рекомендовать тебе лучшие вакансии:</p>

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
      <VacanciesList />
      
    </div>
   );
}
 
export default Main;

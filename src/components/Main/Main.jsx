import './Main.css';
import { useSelector } from 'react-redux'; 
import { Button } from 'antd';
import { DatabaseTwoTone, FundTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const Main = () => {
  const user = useSelector((store) => store.users);
  const userName = (user.fio)? user.fio : user.name;
  let navigate = useNavigate();

  const skillsClickHandler = () => {
    navigate("users/profile/skills");
  };

  const analizeClickHandler = () => {
    navigate("/search");
  }

  return ( 
    <div className="main-page">
      <h2>Привет, {userName}!</h2>
      <p>Я твой карьерный коуч. Ты сделал правильный выбор! Давай начнем строить твою карьеру!</p>
      {/* Здесь нужно вставить проверку: если скилы не добавлены, выводить этот блок: */}
      <div className="skills-line">
        <p>Ты еще не добавил в свой профиль навыки. Давай это сделаем, чтобы я смог рекомендовать тебе лучшие вакансии:</p>

        <Button type="primary" shape="round" icon={<DatabaseTwoTone />} size={'large'} onClick={skillsClickHandler}>
          Заполнить таблицу навыков
        </Button>
      </div>
      {/* Если скилы добавлены, нужно вывести такой же блок, но с другим текстом и названием кнопки "Редактировать свои навыки" : */}
      <div className="skills-line">
      
      </div>

      {/* Здесь нужно вставить проверку: если анализ не проводился, выводить этот блок: */}
      <div className="analize-line">
        <p>Попробуй проанализировать рынок вакансий - это самый мощный мой инструмент. Проведя анализ, мы с тобой поймем, какие навыки требуются работодателям,
          какие из них тебе нужно указать в резюме и портфолио, чтобы тебя точно взяли на работу!
        </p>
        <Button type="primary" shape="round" icon={<FundTwoTone />} size={'large'} onClick={analizeClickHandler}>
          Начать анализ рынка вакансий
        </Button>
      </div>
      {/* Если анализ проводился, нужно вывести такой же блок, но с другим текстом и названием кнопки "Провести новый анализ рынка вакансий" : */}
      <div className="analize-line">

      </div>

      {/* Если навыки добавлены и проводился хотя бы один анализ, нужно выводить в следующем блоке подходящие вакансии : */}
      <div className="vacancies-line">

      </div>
    </div>
   );
}
 
export default Main;

import './Main.css';
import { useSelector } from 'react-redux'; 
import { Button } from 'antd';
import { DatabaseTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Main = () => {
  const user = useSelector((store) => store.users);
  const userName = (user.fio)? user.fio : user.name;
  let navigate = useNavigate();

  const skillsClickHandler = () => {
    navigate("users/profile/skills");
  }

  return ( 
    <div className="main-page">
      <h2>Привет, {userName}!</h2>
      <p>Я твой карьерный коуч. Ты сделал правильный выбор! Давай начнем строить твою карьеру!</p>
      <div className="skills-line">
        <p>Ты еще не добавил в свой профиль навыки. Давай это сделаем, чтобы я смог рекомендовать тебе лучшие вакансии:</p>

        <Button type="primary" shape="round" icon={<DatabaseTwoTone />} size={'large'} onClick={skillsClickHandler}>
          Заполнить таблицу навыков
        </Button>

      </div>
      <div className="searches-line">

      </div>
    </div>
   );
}
 
export default Main;

import { Typography, Button, Tooltip} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './profile.css';
import Avatarka from './Avatar';
import { useSelector } from 'react-redux'; 
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllResultUserAT } from '../../redux/thunk/resultAT';
import { setFio, setEmail, setPassword } from '../../redux/actions/profileAction';
import EditName from './EditName'; 
import EditEmail from './EditEmail';
import EditPassword from './EditPassword';
import React from 'react';


const { Title } = Typography;

const Profile = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.users);
  const allResults = useSelector((store) => store.result.resultAll);
  // console.log(allResults);
  const btnState = useSelector((store) => store.button)
  // console.log(btnState);

  useEffect(() => {
    dispatch(getAllResultUserAT(user.id));

    let navItems = Array.from(document.querySelectorAll('.ant-menu-item'));
    navItems.map((el)=>el.classList.remove('ant-menu-item-selected'));
    document.querySelectorAll('.ant-menu-item')[1].classList.add('ant-menu-item-selected');
  }, []);
  // console.log('user', user)

  const editHandler = (data) => {
    if (user.name === data) dispatch(setFio(!btnState.fio));
    else if (user.email === data) dispatch(setEmail(!btnState.email));
    else dispatch(setPassword(!btnState.password));
  }
 
  return (
    <div className="main-page column-container">
      <div className='one-column-params'>
        <Title level={3} style={{margin: "1em"}}>Мой профиль</Title>
        <div className='profile-container'>
        <Avatarka/>
      
        <ul className='profile-settings'>
        <li><span>Username</span>{user.name}<span /></li>
          <li  id='fio-edit'><span>Имя</span>{user.fio || 'Анонимус'}<span><Tooltip title="edit">
          <Button onClick={() => editHandler(user.name)} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></span></li>
        {btnState.fio && <EditName />}
          <li><span>Почта</span>{user.email}<span><Tooltip title="edit">
          <Button onClick={() => editHandler(user.email)} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></span></li>
        {btnState.email && <EditEmail />}
          <li><span>Пароль</span>***<span><Tooltip title="edit">
          <Button onClick={editHandler} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></span></li>
        {btnState.password && <EditPassword />}
        </ul>
        </div>    
        <Button 
          type="primary"
          // danger
          size="large"
        >
          <Link to="/users/profile/skills">Добавь навыки</Link>
        </Button>
      </div>
      <div className='one-column-params history-page'>
      <Title level={3} style={{margin: "1em"}}>Рекомендации</Title>
        <div className='history-container'>
          <div className='profile-container'>
          <ul className='profile-settings'>
            {allResults.length !== 0 ?
              allResults.map((el) => { return (
                
                <li key={el.createdAt}>
                  <Link to={`/recomendation/${el.id}`}>
                    {`${el.search_string} - ${el.createdAt.slice(0, 10)} / ${el.createdAt.slice(11, 19)}`}
                  </Link>
                </li>
                
              )})
              :
              <h2>Что бы получить рекомендацию сделайте свой первый запрос</h2>
            }
          </ul>
          </div>

        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;

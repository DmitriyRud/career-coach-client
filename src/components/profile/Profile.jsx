import { Typography, Button, Tooltip} from 'antd';
import { EditOutlined, DatabaseTwoTone } from '@ant-design/icons';
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
      <div className='one-column-params padd-1em'>
        <Title level={3} style={{margin: "1em"}}>Мой профиль</Title>
        <div className='profile-container'>
        <Avatarka/>
      
        <ul className='profile-settings'>
        <li><div style={{width: '30%'}}>Username</div><div style={{width: '60%'}}>{user.name}</div><div style={{width: '10%'}}/></li>
        <li  id='fio-edit'><div style={{width: '30%'}}>Имя</div><div style={{width: '60%'}}>{user.fio || 'Анонимус'}</div><div style={{width: '10%'}}>
        <Tooltip title="edit">
          <Button onClick={() => editHandler(user.name)} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></div></li>
        {btnState.fio && <EditName />}
          <li><div style={{width: '30%'}}>Почта</div><div style={{width: '60%'}}>{user.email}</div><div style={{width: '10%'}}><Tooltip title="edit">
          <Button onClick={() => editHandler(user.email)} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></div></li>
        {btnState.email && <EditEmail />}
          <li><div style={{width: '30%'}}>Пароль</div><div style={{width: '60%'}}>***</div><div style={{width: '10%'}}><Tooltip title="edit">
          <Button onClick={editHandler} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></div></li>
        {btnState.password && <EditPassword />}
        </ul>
        </div>    
        <Button 
          type="primary"
          shape="round"
          icon={<DatabaseTwoTone />}
          style={{width: '300px', color: 'white', margin: '1em 0'}}
          size={'large'}
        >
          <Link to="/users/profile/skills" style={{color: 'white'}}>Добавь навыки</Link>
        </Button>
      </div>
      <div className='one-column-params history-page'>
      <Title level={3} style={{margin: "1em"}}>Рекомендации</Title>
        <div className='history-container'>
          <div className='profile-container'>
          <ul className='profile-history'>
            {allResults.length !== 0 ?
              allResults.map((el) => { return (
                
                <li key={el.createdAt} className="li-flex-between">
                  <div className="job-title-div">
                  <Link to={`/recomendation/${el.id}`}>
                    {el.search_string}
                  </Link></div>
                  <div className="job-time-div">{el.createdAt.slice(0, 10)} / {el.createdAt.slice(11, 19)}</div>
                </li>
                
              )})
              :
              <h2>Чтобы получить рекомендацию сделайте свой первый запрос</h2>
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

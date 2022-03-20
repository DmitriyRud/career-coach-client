import { Typography, Button, Tooltip} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './profile.css';
import Avatarka from './Avatar';
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllResultUserAT } from '../../redux/thunk/resultAT';

const { Title } = Typography;

const Profile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.users);
  const allResults = useSelector((store) => store.result.resultAll)
  console.log(allResults);
  useEffect(() => {
    dispatch(getAllResultUserAT(user.id))
  }, [])
  // console.log('user', user)

  const editHandler = (data) => {
    if (user.name === data) {
      navigate(`/profile/edit/${user.name}`)
    } else if (user.email === data) navigate(`/profile/edit/email`)
    else navigate(`/profile/edit/password`)
  }
 
  return (
    <div className="main-page column-container">
      <div className='one-column-params'>
        <Title level={3} style={{margin: "1em"}}>Мой профиль</Title>
        <div className='profile-container'>
        <Avatarka/>
      
        <ul className='profile-settings'>
        <li><span>Имя</span>{user.name}<span /></li>
          <li><span>Имя</span>{user.fio || 'Анонимус'}<span><Tooltip title="edit">
          <Button onClick={() => editHandler(user.name)} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></span></li>
          <li><span>Почта</span>{user.email}<span><Tooltip title="edit">
          <Button onClick={() => editHandler(user.email)} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></span></li>
          <li><span>Пароль</span>***<span><Tooltip title="edit">
          <Button onClick={editHandler} type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip></span></li>
        </ul>
        </div>    
        <Button 
          type="primary"
          // danger
          size='large'>
          <Link to="/users/profile/skills">Добавь навыки</Link>
        </Button>
      </div>
      <div className='one-column-params'>
      <Title level={3} style={{margin: "1em"}}>Рекомендации</Title>
        <div className='profile-container'>
        <ul className='profile-settings'>
          {allResults.length !== 0 ?
            allResults.map((el) => { return (
              
              <li key={el.createdAt}>
                <Link to={`/recomendation/${el.id}`}>
                  {`${el.search_string} - ${el.createdAt.slice(0, 10)}`}
                </Link>
              </li>
              
            )})
            :
            <h2>Что бы получить рекомендацию сделайте свой первый запрос</h2>
          }
        </ul>
        </div>
      </div>
      <div>

      </div>
  </div>
  );
}
 
export default Profile;

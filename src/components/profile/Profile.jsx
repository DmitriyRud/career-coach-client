import { Typography, Button, Tooltip} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './profile.css'
import Avatarka from './Avatar';
import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const { Title } = Typography;

const Profile = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.users);

  console.log('user', user)

  const editHandler = (data) => {
    if (user.name === data) {
      navigate(`/profile/edit/${user.name}`)
    } else if (user.email === data) navigate(`/profile/edit/email`)
    else navigate(`/profile/edit/password`)
  }
 
  return (
    <>
    <Button type="primary" danger size='large'>
      <Link to="/profile/skills">Добавь навыки</Link>
    </Button>
    <Title level={3} style={{margin: "3%"}}>Мой профиль</Title>
     <div className='profile-container'>
    <Avatarka/>
   
    <ul className='profile-settings'>
    <li><span>Имя пользователя</span>{user.name}<span></span></li>
      <li><span>Имя</span>{user.fio}<span><Tooltip title="edit">
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
  </>
  );
}
 
export default Profile;

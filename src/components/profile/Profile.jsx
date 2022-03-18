import { List, Typography, Divider, Button, Tooltip} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './profile.css'
import Avatarka from './Avatar';
import { useDispatch, useSelector } from 'react-redux'; 
import { useState } from 'react';

const { Title } = Typography;

const Profile = () => {

  //const user = useSelector(store => store.reducer1);
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  



  return (
    <>
    <Title level={3} style={{margin: "3%"}}>Мой профиль</Title>
     <div className='profile-container'>
    <Avatarka/>
   
    <ul className='profile-settings'>
      <li><span>Имя</span>Иван<span><Tooltip title="edit">
      <Button type="primary" shape="circle" icon={<EditOutlined />} />
    </Tooltip></span></li>
      <li><span>Почта</span>Иван@mail.ru<span><Tooltip title="edit">
      <Button type="primary" shape="circle" icon={<EditOutlined />} />
    </Tooltip></span></li>
      <li><span>Пароль</span>123<span><Tooltip title="edit">
      <Button type="primary" shape="circle" icon={<EditOutlined />} />
    </Tooltip></span></li>
    </ul>
    </div>
  </>
  );
}
 
export default Profile;

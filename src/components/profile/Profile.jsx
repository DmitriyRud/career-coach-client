import { List, Typography, Divider, Button, Tooltip} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './profile.css'
import Avatarka from './Avatar';

const { Title } = Typography;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];



const Profile = () => {
  return (
    <>
    <Title level={3} style={{margin: "3%"}}>Мой профиль</Title>
     <div className='profile-container'>
    <Avatarka/>
   

     

    {/* <ul>
      <li>Привет<span>GHbdt</span></li>
      <Divider/>
    </ul> */}

     
      <List
      size="large"
      bordered
      dataSource={data}
      className="list-container"
      renderItem={item => (
      <>
      <List.Item style={{width: "100%"}}>{item}
      <Tooltip title="edit">
      <Button type="primary" shape="circle" icon={<EditOutlined />} />
    </Tooltip>
          </List.Item><Divider style={{margin: "3px"}}/>
      </>)}
    />
    </div>
  </>
  // mountNode,
  );
}
 
export default Profile;

import { Button, Avatar } from 'antd';
import { UserOutlined, DownloadOutlined} from '@ant-design/icons';

const Avatarka = () => {
  return ( 
    <div class="card-avatar">
      <img src='https://goodt-git.goodt.me/projects/GOOD/repos/vue2-job-interview/raw/public/avatar.webp?at=447e5782cfb907b99e482760e06f7c95110bdbd7'/>
  {/* <Avatar style={{borderRadius: "1em 1em 1em 1em", width:"95%"}} icon={<UserOutlined />} /> */}
  <div class="avatar-container">
  <Button type="primary" shape="round" icon={<DownloadOutlined />} size='middle'>
          Download
        </Button>
  </div>
</div>


  );
}
 
export default Avatarka;

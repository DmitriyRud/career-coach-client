import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'; 
import HeaderNav from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';

const { Content, Footer } = Layout;



function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderNav/>
        <Routes>
          {/* <Route path='/' element={<Navigate to ="/products"/>} /> */}
          <Route path='/profile' element={<Profile/>} />
          {/* <Route path='/couriers' element={<CourierForm/>} /> */}
        </Routes>
        <Content style={{ padding: '0 50px' }}>
    
          <div className="site-layout-content content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;

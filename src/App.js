import './App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'; 
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const { Header, Content, Footer } = Layout;
// import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header className="header">
          <div className="logo"></div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key='1'><Link to='/'>Главная</Link></Menu.Item>
            <Menu.Item key='2'><Link to='/login'>Войти</Link></Menu.Item>
            <Menu.Item key='3'><Link to='/register'>Зарегистрироваться</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content content">
          <Routes>
            {/* <Route path="/" element={<Main />} />             */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;

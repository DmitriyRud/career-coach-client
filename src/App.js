import './App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'; 
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Search from './components/Search/Search';
import Main from './components/Main';
import { useSelector } from "react-redux";
// import UserSkills from './components/UserSkills/';
import UserSkills from './components/UserSkills/UserSkills';

const { Header, Content, Footer } = Layout;
// import { Routes, Route } from 'react-router-dom';


function App() {
    const store = useSelector((store) => store.users);
    //console.log('store = ', store);
    // if (store.name){
    //   console.log('User: ', store.name);
    // }

  return (
    <div className="App">
      <Layout className="layout">
        <Header className="header">
          <div className="logo"></div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key='1'><Link to='/'>Главная</Link></Menu.Item>
            {!store.name && <Menu.Item key='2'><Link to='/signin'>Войти</Link></Menu.Item>}
            {!store.name && <Menu.Item key='3'><Link to='/signup'>Зарегистрироваться</Link></Menu.Item>}
            {store.name && <Menu.Item key='4'><Link to='/profile'>{store.name}</Link></Menu.Item>}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content content">
          <Routes>
            <Route path="/" element={<Main />} />            
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<UserSkills />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;

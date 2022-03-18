import './App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'; 
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Search from './components/Search/Search';
import Main from './components/Main';
import Profile from './components/profile/Profile';
import { useSelector } from "react-redux";
import EditName from './components/profile/EditName';
import EditEmail from './components/profile/EditEmail';
import EditPassword from './components/profile/EditPassword';
const { Content, Header, Footer } = Layout;



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
            <Route path="/search" element={<Search />} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/profile/edit/:name' element={<EditName/>} />
            <Route path='/profile/edit/email' element={<EditEmail/>} />
            <Route path='/profile/edit/password' element={<EditPassword/>} /> 
          </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;

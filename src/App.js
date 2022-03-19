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
import { useDispatch } from 'react-redux';
import { checkUserAC } from './redux/thunk/usersAC';
import Logout from './components/Logout';
// import UserSkills from './components/UserSkills/';
import UserSkills from './components/UserSkills/UserSkills';
import Result from './components/Result/Result';
import Analize from './components/Analize/Analize';

const { Content, Header, Footer } = Layout;

function App() {
    const store = useSelector((store) => store.users);
    const dispatch = useDispatch();

    
    if (!store.name){
      dispatch(checkUserAC());
    }

  return (
    <div className="App">
      <Layout className="layout">
        <Header className="header">
          <div className="logo"></div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key='1'><Link to='/'>Главная</Link></Menu.Item>
            {!store.name && <Menu.Item key='2'><Link to='/signin'>Войти</Link></Menu.Item>}
            {!store.name && <Menu.Item key='3'><Link to='/signup'>Зарегистрироваться</Link></Menu.Item>}
            {store.name && <Menu.Item key='4'><Link to='/users/profile/skills'>{store.name}</Link></Menu.Item>}
            {store.name && <Menu.Item key='5'><Link to='/logout'>Выйти</Link></Menu.Item>}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content content">
          <Routes>
            <Route path="/" element={<Main />} />            
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            <Route path="/users/profile/skills" element={<UserSkills />} />

            <Route path="/search" element={<Search />} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/profile/edit/:name' element={<EditName/>} />
            <Route path='/profile/edit/email' element={<EditEmail/>} />
            <Route path='/profile/edit/password' element={<EditPassword/>} /> 
            <Route path="/logout" element={<Logout />} />
            {/* тестовый рут для result */}
            <Route path="/result" element={<Result result_id={1}/>} />
            {/* конец тестового рута */}
            <Route path="/api" element={<Analize />} />
          </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;

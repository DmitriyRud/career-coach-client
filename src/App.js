import './App.css';
import React from 'react';

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
import Recomendation from './components/Recomendation/Recomendation';
import VacanciesList from './components/VacanciesList';
import MainInfo from './components/Main/MainInfo/Main2';
import WhiteList from './components/Lists/WhiteList';
import BlackList from './components/Lists/BlackList';
import { allSkillsFromSkills } from './redux/actions/userSkills';
import { useEffect } from 'react';

const { Content, Header, Footer } = Layout;

function App() {
    const store = useSelector((store) => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(allSkillsFromSkills(store.id));
    }, []);
    
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
            {store.name && <Menu.Item key='4'><Link to='/users/profile/'>{store.name}</Link></Menu.Item>}
            {store.name && <Menu.Item key='5'><Link to='/search'>Анализ вакансий</Link></Menu.Item>}
            {store.name && <Menu.Item key='6'><Link to='/logout'>Выйти</Link></Menu.Item>}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content content">
          <Routes>
            {store.name && <Route path="/" element={<Main />} />}
            {!store.name && <Route path="/" element={<MainInfo/>} />}
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            <Route path="/users/profile/skills" element={<UserSkills />} />

            <Route path="/search" element={<Search />} />
            <Route path='/users/profile' element={<Profile/>} />
            <Route path='/profile/edit/:name' element={<EditName/>} />
            <Route path='/profile/edit/email' element={<EditEmail/>} />
            <Route path='/profile/edit/password' element={<EditPassword/>} /> 
            <Route path="/logout" element={<Logout />} />
            {/* тестовый рут для result */}
            <Route path="/result/:result_id" element={<Result />} />
            {/* конец тестового рута */}
            {/* тестовый рут для recomendation */}
            <Route path="/recomendation/:result_id" element={<Recomendation/>} />
            {/* конец тестового рута */}
            {/* тестовый рут для vacancies list */}
            <Route path="/vacancies" element={<div className="main-page vacancies-container"><div><VacanciesList /></div></div>} />
            {/* конец тестового рута */}
            <Route path="/api" element={<Analize />} />
            <Route path="/whitelist" element={<WhiteList/>} />
            <Route path="/blacklist" element={<BlackList/>} />
          </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Career Coach ©2022 Elbrus War-Hedgehogs</Footer>
      </Layout>
    </div>
  );
}

export default App;

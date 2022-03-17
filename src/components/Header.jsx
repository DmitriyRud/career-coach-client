import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'; 
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderNav = () => {
  return (
    <Layout className="layout">
    <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item>
        <Link to="/profile"/>
        Profile          
      </Menu.Item>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>SignUp</Menu.Item>
      <Menu.Item>SignIn</Menu.Item>
    </Menu>
  </Header>
  </Layout>
  );
}
 
export default HeaderNav;

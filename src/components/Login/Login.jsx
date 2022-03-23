import React from 'react';

import './Login.css';
import { Form, Input, Button } from 'antd';
import sha256 from 'sha256';
import { useDispatch } from 'react-redux';
import { loginUserAC } from '../../redux/thunk/usersAC';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    values.password = sha256(values.password);
    dispatch(loginUserAC(values));
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return ( 
    <div className="login-window">
      <div className="login-display">
        <div className="message"><p>&nbsp;</p></div>
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: 'Введите имя пользователя!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите пароль!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
   );
}
 
export default Login;

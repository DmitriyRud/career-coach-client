import "./Register.css";
import React from "react";
import { Form, Input, Button } from "antd";
import sha256 from "sha256";
import { registerUserAC } from "../../redux/thunk/usersAC";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} обязательно для заполнения!",
  types: {
    email: "${label} неверный формат электронной почты",
  },
};

const Register = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    values.password = sha256(values.password);
    values.confirm = values.password;
    dispatch(registerUserAC(values));
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const ref = React.createRef(
    document.getElementById("nest-messages_password")
  );

  return (
    <div className="register-window">
      <div className="register-display">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            className="register-input"
            name="name"
            label="Имя пользователя"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="register-input"
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="register-input"
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: "Введите пароль!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            className="register-input"
            name="confirm"
            label="Пароль еще раз"
            dependencies={[ref]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Подтвердите пароль!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Пароли не совпадают!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <div className="register-button">
              <Button type="primary" htmlType="submit" size={"large"}>
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;

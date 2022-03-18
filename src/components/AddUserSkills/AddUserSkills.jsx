import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { useDispatch } from "react-redux";
import { addSkill } from '../../redux/actions/addUserSkills';

const AddUserSkills = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    // console.log(e.target);
    e.preventDefault();
    dispatch(addSkill(input))
    setInput('')
  };
  
  return (
    <>
    <h1>Введите навыки:</h1>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item wrapperCol={{ offset: 5, span: 15 }} name="skills">
        <Input value={input} onChange={inputHandler} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 5, span: 15 }}>
        <Button onClick={submitHandler} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </>
  );
};

export default AddUserSkills;

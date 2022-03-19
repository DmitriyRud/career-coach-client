import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addSkillinLearn, addSkillinSkill } from "../../redux/actions/userSkills";
import { Radio } from "antd";

const AddUserSkills = () => {
  const [input, setInput] = useState();
  const [radio, setRadio] = useState("skills");
  const store = useSelector((store) => store.users);
  const { id } = store;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const radioHandler = (e) => {
    setRadio(e.target.value);
  };
  // console.log(radio);

  const submitHandler = (e) => {
    if (radio === "skills") {
      if (input === undefined || input === "") {
        return alert("Введите навык");
      } else {
        e.preventDefault();
        dispatch(addSkillinSkill({ input, id }));
        setInput("");
        form.resetFields();
      }
    } else if (radio === "learn") {
      if (input === undefined || input === "") {
        return alert("Введите навык");
      } else {
        e.preventDefault();
        dispatch(addSkillinLearn({input, id}));
        setInput("");
        form.resetFields();
      }
    }
  };

  return (
    <>
      <h1>Введите навыки:</h1>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <Form.Item wrapperCol={{ offset: 5, span: 15 }} name="skills">
          <Input value={input} onChange={inputHandler} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5, span: 15 }}>
          <Radio.Group defaultValue="skills" buttonStyle="solid">
            <Radio onChange={radioHandler} value="skills">
              Навыки
            </Radio>
            <Radio onChange={radioHandler} value="learn">
              Выучить
            </Radio>
          </Radio.Group>
          <Button onClick={submitHandler} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUserSkills;

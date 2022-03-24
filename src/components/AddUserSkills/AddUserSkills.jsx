import React, { useState, useEffect } from "react";
import { Input, Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkillinLearn,
  addSkillinSkill,
  allSkillsFromSelect,
} from "../../redux/actions/userSkills";
import { Radio, Spin } from "antd";
import { RightSquareTwoTone } from '@ant-design/icons';
import SelectSkills from "../SelectSkills";

const AddUserSkills = () => {
  const [input, setInput] = useState("");
  const [radio, setRadio] = useState("skills");

  const store = useSelector((store) => store.users);
  const allSkills = useSelector((store) => store?.allSkilsForSelect);
  const checkSkill = useSelector((store) =>
    store.userSkills?.map((el) => el.skill?.toLowerCase())
  );
  const checkSkillLearn = useSelector((store) =>
    store.userSkillsLearn?.map((el) => el.skill.toLowerCase())
  );

  const { id } = store;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  console.log(store.id);
  useEffect(() => {
    dispatch(allSkillsFromSelect());
  }, []);

  
  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const radioHandler = (e) => {
    e.preventDefault();
    setRadio(e.target.value);
  };
  // console.log(radio);

  const submitHandler = (e) => {
    e.preventDefault();
    if (radio === "skills") {
      if (
        input === undefined ||
        input === "" ||
        checkSkill?.includes(input.toLowerCase())
      ) {
        setInput("");
        form.resetFields();
      } else {
        dispatch(addSkillinSkill({ input, id }));
        setInput("");
        form.resetFields();
      }
    } else if (radio === "learn") {
      if (
        input === undefined ||
        input === "" ||
        checkSkillLearn?.includes(input.toLowerCase())
      ) {
        setInput("");
        form.resetFields();
      } else {
        dispatch(addSkillinLearn({ input, id }));
        setInput("");
        form.resetFields();
      }
    }
  };

  return (
    <>
      <h1>Введите или выберите навыки:</h1>
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
              В навыки
            </Radio>
            <Radio onChange={radioHandler} value="learn">
              В планы
            </Radio>
          </Radio.Group>
          <Button onClick={submitHandler} type="primary" shape="round" icon={<RightSquareTwoTone />} htmlType="submit" style={{ width: 150 }}>
            Добавить
          </Button>
          <hr />

          {allSkills?.map((el) => (
            <SelectSkills key={el.id} checkSkill={checkSkill} checkSkillLearn={checkSkillLearn} id={el.id} input={el.skill} />
          ))}
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUserSkills;

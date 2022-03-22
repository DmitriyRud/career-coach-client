import React, { useState, useEffect } from "react";
import { Input, Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkillinLearn,
  addSkillinSkill,
  allSkillsFromLearn,
  allSkillsFromSkills,
  allSkillsFromSelect,
} from "../../redux/actions/userSkills";
import { Radio } from "antd";
import SelectSkills from "../SelectSkills";
import allSkillsFromDB from "../../redux/reducers/allSkillsFromBdReducer";

const AddUserSkills = () => {
  const [input, setInput] = useState("");
  const [radio, setRadio] = useState("skills");
  const skills = useSelector((store) => store?.userSkills);
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

  useEffect(() => {
    dispatch(allSkillsFromSelect());
  }, []);

  useEffect(() => {
    dispatch(allSkillsFromSkills(store.id));
  }, []);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const radioHandler = (e) => {
    setRadio(e.target.value);
  };
  // console.log(radio);

  const submitHandler =  (e) => {
    if (radio === "skills") {
      if (
        input === undefined ||
        input === "" ||
        checkSkill?.includes(input.toLowerCase())
      ) {
        return alert("Вы не ввели навык или такой навык уже добавлен");
      } else {
        e.preventDefault();
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
        return alert("Вы не ввели навык или такой навык уже добавлен");
      } else {
        e.preventDefault();
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
              Навыки
            </Radio>
            <Radio onChange={radioHandler} value="learn">
              Выучить
            </Radio>
          </Radio.Group>
          <Button onClick={submitHandler} type="primary" htmlType="submit">
            Submit
          </Button>
          <hr />
          {allSkills?.map((el) => (
            <SelectSkills key={el.id} id={el.id} input={el.skill} />
          ))}
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUserSkills;

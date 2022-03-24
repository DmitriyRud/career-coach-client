// import { Card } from "antd";
import "./Skills.css";
import React from "react";
import { Button, Rate } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  allSkillsFromSkills,
  updateRate,
} from "../../redux/actions/userSkills";
import {
  deleteUserLearn,
  deleteUserSkill,
} from "../../redux/actions/userSkills";



const Skills = ({ skill, category, user_id, skill_id, rate }) => {

  const dispatch = useDispatch();
  const deleteHandler = async (user_id, skill_id, category) => {
    if (category === "skills") {
      dispatch(deleteUserSkill(user_id, skill_id));
    }

    if (category === "learn") {
      dispatch(deleteUserLearn(user_id, skill_id));
    }
  };

  const changeHandler = (value) => {
    // setStars(value);
    dispatch(updateRate({ user_id, skill_id, value }));
  };

  

  return (
    <div className="card">
      <div>
        <span className="card-span">{skill}</span>
      </div>
      <div className="stars">
        <Rate onChange={changeHandler} value={rate / 2} allowHalf />
      </div>
      <Button
        onClick={() => deleteHandler(user_id, skill_id, category)}
        className="btn-delete"
        icon={<DeleteTwoTone twoToneColor="red" />}
        shape="circle"
        type="ghost"
      />
    </div>
  );
};

export default Skills;

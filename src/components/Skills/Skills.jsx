// import { Card } from "antd";
import "./Skills.css";
import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  deleteUserLearn,
  deleteUserSkill,
} from "../../redux/actions/userSkills";

const Skills = ({ skill, category, user_id, skill_id }) => {
  console.log(skill);
  const dispatch = useDispatch();
  const deleteHandler = async (user_id, skill_id, category) => {
    if (category === "skills") {
      dispatch(deleteUserSkill(user_id, skill_id));
    } else if (category === "learn") {
      dispatch(deleteUserLearn(user_id, skill_id));
    }
  };

  return (
    <div className="card">
      <span>{skill}</span>
      <Button
        onClick={() => deleteHandler(user_id, skill_id, category)}
        className="btn-delete"
      >
        🗑
      </Button>
    </div>
  );
};

export default Skills;

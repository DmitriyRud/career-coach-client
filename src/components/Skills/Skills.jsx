// import { Card } from "antd";
import "./Skills.css";
import React from "react";
import { Button, Rate } from "antd";
import { useDispatch } from "react-redux";
import {
  deleteUserLearn,
  deleteUserSkill,
} from "../../redux/actions/userSkills";

const Skills = ({ skill, category, user_id, skill_id }) => {
  const dispatch = useDispatch();
  const deleteHandler = async (user_id, skill_id, category) => {
    console.log("in delete", skill, category, user_id, skill_id);
    if (category === "skills") {
      dispatch(deleteUserSkill(user_id, skill_id));
    }

    if (category === "learn") {
      dispatch(deleteUserLearn(user_id, skill_id));
    }
  };

  return (
    <div className="card">
      <div>
        <span className="card-span">{skill}</span>
      </div>
      <div className="stars">
        <Rate allowHalf defaultValue={2.5} />
      </div>
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

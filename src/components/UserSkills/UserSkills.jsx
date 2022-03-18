import React from "react";
import MySkillsList from "../MySkillsList/MySkillsList";
import "./UserSkills.css";
import SkillsStudy from '../SkillsStudy/SkillsStudy';
import { Row, Col } from 'antd';
import AddUserSkills from '../AddUserSkills/AddUserSkills';

const UserSkills = () => {
  return (
    <div>
      <Row >
        <Col span={8}>
          <AddUserSkills />
        </Col>
        <Col span={8}>
          <MySkillsList/>
        </Col>
        <Col span={8}>
          <SkillsStudy/>
        </Col>
      </Row>
    </div>
  );
};

export default UserSkills;

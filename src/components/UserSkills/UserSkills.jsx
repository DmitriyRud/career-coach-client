import React from "react";
import MySkillsList from "../MySkillsList/MySkillsList";
import "./UserSkills.css";
import SkillsStudy from '../SkillsStudy/SkillsStudy';
import { Row, Col } from 'antd';
import AddUserSkills from '../AddUserSkills/AddUserSkills';

const UserSkills = () => {
  return (
    <div className="main-page">
      <Row >
        <Col className="col" span={8}>
          <AddUserSkills />
        </Col>
        <Col className="col" span={8}>
          <MySkillsList/>
        </Col>
        <Col className="col" span={8}>
          <SkillsStudy/>
        </Col>
      </Row>
    </div>
  );
};

export default UserSkills;

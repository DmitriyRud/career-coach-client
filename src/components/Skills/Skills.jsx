import { Card } from 'antd';
import React from 'react';

const Skills = ({skill}) => {
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  // console.log(skill);
  return (
    <div>
      <Card style={{  width: 300 }}>
      <span>{skill}</span>
    </Card>
    </div>
  );
}

export default Skills;


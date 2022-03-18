import React from "react";
import { useSelector } from "react-redux";
import Skills from "../Skills/Skills";
import AddUserSkills from "../AddUserSkills/";

const MySkillsList = () => {
  const skills = useSelector((store) => store.userSkills);
  console.log(skills);

  return (
    <div>
      {skills?.map((skill, i) => (
        <Skills key={i + 1} skill={skill} />
      ))}
    </div>
  );
};

export default MySkillsList;

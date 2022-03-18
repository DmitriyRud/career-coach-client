import React from "react";
import { useSelector } from "react-redux";
import Skills from "../Skills/Skills";
import AddUserSkills from "../AddUserSkills/";

const MySkillsList = () => {
  const skills = useSelector((store) => store.userSkills);
  const users = useSelector((store) => store.users)
  console.log(users);

  return (
    <div>
       <h1>Ваши навыки:</h1>
      {skills?.map((skill, i) => (
        <Skills key={i + 1} skill={skill} />
      ))}
    </div>
  );
};

export default MySkillsList;

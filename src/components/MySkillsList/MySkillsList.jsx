import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skills from "../Skills/Skills";
import AddUserSkills from "../AddUserSkills/";
import { allSkillsFromSkills } from "../../redux/actions/userSkills";

const MySkillsList = () => {
  const skills = useSelector((store) => store.userSkills);
  const users = useSelector((store) => store.users)
  const id = useSelector((store) => store.users.id)
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(allSkillsFromSkills(id))
  },[])

  return (
    <div>
       <h1>Ваши навыки:</h1>
      {
       skills?.map((skill, i) => (
        <Skills key={i + 1} skill={skill} />
      ))}
    </div>
  );
};

export default MySkillsList;

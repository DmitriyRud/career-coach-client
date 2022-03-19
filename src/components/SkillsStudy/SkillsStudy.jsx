import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSkillsFromLearn } from "../../redux/actions/userSkills";
import Skills from "../Skills/Skills";

const SkillsStudy = () => {

  const skillsLearn = useSelector((store) => store.userSkillsLearn);
  const id = useSelector((store) => store.users.id)
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(allSkillsFromLearn(id))
  },[])

  return (
    <div>
      <h1>Выучить:</h1>
      {
       skillsLearn?.map((skill, i) => (
        <Skills key={i + 1} skill={skill} />
      ))}
    </div>
  );
}

export default SkillsStudy;

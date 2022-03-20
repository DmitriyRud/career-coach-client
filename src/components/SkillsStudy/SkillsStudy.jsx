import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSkillsFromLearn } from "../../redux/actions/userSkills";
import Skills from "../Skills/Skills";

const SkillsStudy = () => {

  const skillsLearn = useSelector((store) => store.userSkillsLearn);
  // console.log('skillsLearn',skillsLearn);
  const id = useSelector((store) => store.users.id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allSkillsFromLearn(id))
    
  },[])

  return (
    <div>
      <h1>Выучить:</h1>
      {
       skillsLearn?.map((el, i) => (
        <Skills key={i + 1} skill_id={el.skill_id} skill={el.skill} user_id={el.user_id} category={el.category} />
      ))}
    </div>
  );
}

export default SkillsStudy;

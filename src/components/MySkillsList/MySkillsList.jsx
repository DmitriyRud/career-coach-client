import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skills from "../Skills/Skills";
import AddUserSkills from "../AddUserSkills/";
import { allSkillsFromSkills } from "../../redux/actions/userSkills";

const MySkillsList = () => {
  const skills = useSelector((store) => store?.userSkills);
  console.log("UserSkills", skills);
  const users = useSelector((store) => store?.users);
  const id = useSelector((store) => store?.users.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allSkillsFromSkills(id));
  }, []);

  return (
    <div>
      {console.log(skills)}
      <h1>Ваши навыки:</h1>
      {skills &&
        skills.map((el, i) => (
          <Skills
            key={i + 1}
            skill_id={el.skill_id}
            skill={el.skill}
            user_id={el.user_id}
            category={el.category}
          />
        ))}
    </div>
  );
};

export default MySkillsList;

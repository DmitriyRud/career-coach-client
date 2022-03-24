
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skills from "../Skills/Skills";
import AddUserSkills from "../AddUserSkills/";
import { allSkillsFromSkills } from "../../redux/actions/userSkills";
import { Spin } from 'antd';
import { disableSpinner, enableSpinner } from "../../redux/actions/spinnerAction";

const MySkillsList = () => {
  const skills = useSelector((store) => store?.userSkills);
  const spinner = useSelector(store => store?.spinner)
  const users = useSelector((store) => store?.users);
  // const id = useSelector((store) => store?.users.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(enableSpinner());
    fetch('/users/profile/checkuserid')
    .then(response => response.json())
    .then(id => dispatch(allSkillsFromSkills(id)))
    .catch((e) => console.error('>>>>>>>>>', e))
      .finally(() => {
        dispatch(disableSpinner());
      });


  }, []);

 

  
  if (spinner) return <div className="spin-center"><Spin /></div>


  
  if (spinner) return <div className="spin-center"><Spin /></div>


  
  if (spinner) return <div className="spin-center"><Spin /></div>

  return (
    <div>
      <h1>Ваши навыки:</h1>
      {skills &&
        skills.map((el, i) => (
          <Skills
            key={i + 1}
            skill_id={el.skill_id}
            skill={el.skill}
            user_id={el.user_id}
            rate={el.rate}
            category={el.category}
          />
        ))}
    </div>
  );
};

export default MySkillsList;

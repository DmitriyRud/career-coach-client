import './SkillsStudy.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSkillsFromLearn } from "../../redux/actions/userSkills";
import Skills from "../Skills/Skills";
import { Spin } from "antd";
import {
  disableSpinner,
  enableSpinner,
} from "../../redux/actions/spinnerAction";

const SkillsStudy = () => {
  const skillsLearn = useSelector((store) => store?.userSkillsLearn);
  // console.log('skillsLearn',skillsLearn);
  const id = useSelector((store) => store?.users.id);
  const dispatch = useDispatch();
  const spinner = useSelector((store) => store?.spinner);

  useEffect(() => {
    dispatch(enableSpinner());
    fetch("/users/profile/checkuserid")
      .then((response) => response.json())
      .then((id) => dispatch(allSkillsFromLearn(id)))
      .catch((e) => console.error(">>>>>>>>>", e))
      .finally(() => {
        dispatch(disableSpinner());
      });
  }, []);

  if (spinner)
    return (
      
          <div className="spin-center"><Spin /></div>
       
    );

  return (
    <div>
      <h1>Выучить:</h1>
      {skillsLearn?.map((el, i) => (
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

export default SkillsStudy;

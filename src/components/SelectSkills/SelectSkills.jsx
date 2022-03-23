import "./SelectSkills.css";
import { Typography, Space } from "antd";
import { Button, Tooltip } from "antd";
import {
  DatabaseTwoTone,
  CalendarTwoTone,
  CheckCircleOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allSkillsFromDB from "../../redux/reducers/allSkillsFromBdReducer";
import {
  addSkillinLearn,
  addSkillinSkill,
  allSkillsFromLearn,
  allSkillsFromSkills,
} from "../../redux/actions/userSkills";
const { Text } = Typography; // Link для ссылки добавить

const SelectSkills = ({ input, checkSkillLearn, checkSkill }) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store?.users);
  const userSkills = useSelector((store) => store?.userSkills);
  // const checkSkill = useSelector((store) =>
  //   store.userSkills?.map((el) => el.skill?.toLowerCase())
  // );
  // const checkSkillLearn = useSelector((store) =>
  //   store.userSkillsLearn?.map((el) => el.skill.toLowerCase())
  // );
  const ultraAllSkills = [...checkSkill, ...checkSkillLearn];
  // console.log(checkSkillLearn.includes(input.toLowerCase()));

  const id = useSelector((store) => store?.users.id);

  const addInSkill = (skills) => {
    dispatch(addSkillinSkill(skills));
    // await dispatch(allSkillsFromSkills(id));
  };

  const addInLearn = (skills) => {
    dispatch(addSkillinLearn(skills));
    // await dispatch(allSkillsFromLearn(id));
  };
  // useEffect(() => {
  //   dispatch(allSkillsFromSkills(id))
  // },[])

  return (
    <div className="select-skills">
      <Text style={{ display: "flex", justifyContent: "space-between" }}>
        <Text strong>{input}</Text>
        {ultraAllSkills.includes(input.toLowerCase()) ? (
          <div>
            <Tooltip title="Добавить в 'навыки'">
              <Button
                disabled={true}
                onClick={() => addInSkill({ input, id })}
                type="ghost"
                // type="text"
                shape="circle"
                icon={<DatabaseTwoTone twoToneColor="gray"/>}
                size="small"
              />
            </Tooltip>

            <Tooltip title="Добавить в 'выучить'">
              <Button
                disabled={true}
                onClick={() => addInLearn({ input, id })}
                className="select-btn"
                type="ghost"
                // type="text"
                shape="circle"
                icon={<CalendarTwoTone twoToneColor="gray"/>}
                size="small"
              />
            </Tooltip>
          </div>
        ) : (
          <div>
            <Tooltip title="Добавить в 'навыки'">
              <Button
                onClick={() => addInSkill({ input, id })}
                type="ghost"
                // type="text"
                shape="circle"
                icon={<DatabaseTwoTone />}
                size="small"
              />
            </Tooltip>

            <Tooltip title="Добавить в 'выучить'">
              <Button
                onClick={() => addInLearn({ input, id })}
                className="select-btn"
                type="ghost"
                // type="text"
                shape="circle"
                icon={<CalendarTwoTone />}
                size="small"
              />
            </Tooltip>
          </div>
        )}
      </Text>
    </div>
  );
};

export default SelectSkills;

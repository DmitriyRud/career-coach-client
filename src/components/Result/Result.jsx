import React from "react";
import { getResultAT, getReportAT } from "../../redux/thunk/resultAT";
import { Row, Col } from 'antd';
import { Typography, Space } from 'antd';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import './Result.css';
import { Link } from "react-router-dom";
import { Button, Tooltip } from 'antd';
import { DatabaseTwoTone, CalendarTwoTone, EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons';
import { addSkillWhiteList, addSkillBlackList, addUserSkill, addMyPlans } from "../../redux/thunk/resultAT";
import { useParams } from "react-router-dom";
import { getUserDataAC } from "../../redux/thunk/usersAC";

const { Text } = Typography; // Link для ссылки добавить

const Result = () => {
  const dispatch = useDispatch();
  const {result_id} = useParams();
  // console.log('DATA to STATE RESULT_ID>>>>>  ', result_id);

  const result = useSelector((state) => state.result.result);
  const report = useSelector((state) => state.result.report);
  // console.log('DATA to STATE RESULT>>>>>  ', result);

  const userData = useSelector((state) => state.userData)
  // console.log('DATA to userData>>>>>  ', userData);

  // console.log('DATA to STATE REPORT>>>>>  ', report);
  useEffect(() => {
    dispatch(getResultAT(result_id));
    dispatch(getReportAT(result_id));
    dispatch(getUserDataAC());
  }, [])

  const onClickWhite = async (skill) => {
    // console.log(skill);
    await dispatch(addSkillWhiteList(skill))
    dispatch(getUserDataAC());
  }
  const onClickBlack = async (skill) => {
    // console.log(skill);
    await dispatch(addSkillBlackList(skill))
    dispatch(getUserDataAC());
  }
  const onClickUserSkill = async (skill) => {
    console.log(skill);
    await dispatch(addUserSkill(skill))
    dispatch(getUserDataAC());
  }
  const onClickMyPlans = async (skill) => {
    // console.log(skill);
    await dispatch(addMyPlans(skill))
    dispatch(getUserDataAC());
  }

  return ( 
    <div className="main-page">
      <Row className="result-container">
      <Col span={10} className='col col-left'>
        <div>
          <Space className="result-column-left" direction="vertical">
            <div className="column" >
            <Text strong>
              Запрос: 
            </Text>
            <br />
            <Text>
              {result.search_string}
            </Text>
            </div>
            <div className="column-middle">
            <Text >
              <div className="line-style skill-div">
              <Text strong>Вакансий:</Text> {result.count_vacancy} <br />
              </div>
              <div className="line-style skill-div">
              <Text strong>Период дней:</Text> {result.period} <br />
              </div>
              <div className="line-style skill-div">
              <Text strong>Сайт:</Text> {result.web_site} <br />
              </div>
              <div className="line-style skill-div">
              <Text strong>Город:</Text> {result.city || '---'} <br />
              </div>
              <div className="line-style skill-div">
              <Text strong>Зарплата:</Text> {result.salary || '---'} <br />
              </div>
              <div className="line-style skill-div">
              <Text strong>Дата запроса:</Text> {result.createdAt?.slice(0, 10)} <br />
              </div>
            </Text>
            <Link to={`/recomendation/${result_id}`}>
              <Button type="primary">
                Рекомендации
              </Button>
            </Link>
            </div>
          </Space>
        </div>
      </Col>
      <Col span={10} className='col'>
        <div>
        <div  className="column">
          <Text strong>
            Рейтинг навыков: 
          </Text>
          </div>
          <div style={{padding: '10px'}}>
          {report
            .sort((a, b) => b[1] - a[1])
            .map((el) => {
              let flagWhiteList = false;
              let flagBlackList = false;
              let flagUserSkills = false;
              let flagMyPlans = false;
              // флаг для кнопки addWhiteList
              // console.log('ELEMENT WORD', el[0]);
              const indW = userData.whiteList.findIndex((item) => el[0] === item.word)
              const indB = userData.blackList.findIndex((item) => el[0] === item.word)
              if(indW > -1 || indB > -1) {
                flagWhiteList = true;
                flagBlackList = true;
              }
              
              const indS = userData.userSkills.findIndex((item) => el[0] === item['Skill.skill'])
              const indP = userData.myPlans.findIndex((item) => el[0] === item['Skill.skill'])
              if(indS > -1 || indP > -1) {
                flagUserSkills = true;
                flagMyPlans = true;
              }

              return (<div key={el[0]} className='skill-div'>
                <Text  style={{display: 'flex', justifyContent: 'space-between'}} >
                  <div>
                    <Text strong>
                      {`${el[0]}: `}
                    </Text>
                    {el[1]}
                    &nbsp; &nbsp; 
                  </div>
                  <div className="div-btn">
                  {
                    flagWhiteList ? 
                    <Button 
                      style={{visibility: 'hidden'}}
                      disabled
                      type="ghost" 
                      shape="circle" 
                      icon={<EyeTwoTone />} 
                      size='small'
                      onClick={() => onClickWhite(el[0])} />
                    :
                    <Tooltip title="add WhiteList" >
                    <Button 
                      type="ghost" 
                      // type="text" 
                      shape="circle" 
                      icon={<EyeTwoTone />} 
                      size='small'
                      onClick={() => onClickWhite(el[0])} />
                  </Tooltip>
                  }
                  &nbsp;
                  {
                    flagBlackList ? 
                    <Button
                      style={{visibility: 'hidden'}}
                      disabled
                      type="ghost" 
                      // type="text" 
                      shape="circle" 
                      icon={<EyeInvisibleTwoTone twoToneColor="red"/>} 
                      size='small'
                      onClick={() => onClickBlack(el[0])} />
                    :
                    <Tooltip title="add BlackList">
                      <Button
                        type="ghost" 
                        // type="text" 
                        shape="circle" 
                        icon={<EyeInvisibleTwoTone twoToneColor="red"/>} 
                        size='small'
                        onClick={() => onClickBlack(el[0])} />
                    </Tooltip>

                  } 
                  &nbsp; 
                  {
                    flagUserSkills ? 
                    <Button 
                      style={{visibility: 'hidden'}}
                      disabled
                      type="ghost" 
                      shape="circle" 
                      icon={<DatabaseTwoTone />} 
                      size='small'
                      onClick={() => onClickUserSkill(el[0])} />
                    :
                    <Tooltip title="add MySkills">
                      <Button 
                        type="ghost" 
                        shape="circle" 
                        icon={<DatabaseTwoTone />} 
                        size='small'
                        onClick={() => onClickUserSkill(el[0])} />
                    </Tooltip>

                  }
                  &nbsp; 
                  {
                    flagMyPlans ?
                    <Button 
                      style={{visibility: 'hidden'}}
                      disabled
                      type="ghost" 
                      shape="circle" 
                      icon={<CalendarTwoTone />} 
                      size='small'
                      onClick={() => onClickMyPlans(el[0])} />
                    :
                    <Tooltip title="add MyPlans">
                      <Button 
                        type="ghost" 
                        shape="circle" 
                        icon={<CalendarTwoTone />} 
                        size='small'
                        onClick={() => onClickMyPlans(el[0])} />
                    </Tooltip>

                  }
                  </div>
                  {/* <br /> */}
                </Text>
              </div>
          )})}
          </div>
        </div>
      </Col>
    </Row>
    </div>
   );
}
export default Result;

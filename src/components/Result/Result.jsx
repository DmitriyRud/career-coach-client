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

const { Text } = Typography; // Link для ссылки добавить

const Result = () => {
  const dispatch = useDispatch();
  const {result_id} = useParams();
  const result = useSelector((state) => state.result.result)
  const report = useSelector((state) => state.result.report)
  console.log('DATA to STATE RESULT>>>>>  ', result);
  console.log('DATA to STATE REPORT>>>>>  ', report);
  useEffect(() => {
    dispatch(getResultAT(result_id));
    dispatch(getReportAT(result_id));
  }, [])

  const onClickWhite = (skill) => {
    // console.log(skill);
    dispatch(addSkillWhiteList(skill))
  }
  const onClickBlack = (skill) => {
    // console.log(skill);
    dispatch(addSkillBlackList(skill))
  }
  const onClickUserSkill = (skill) => {
    // console.log(skill);
    dispatch(addUserSkill(skill))
  }
  const onClickMyPlans = (skill) => {
    // console.log(skill);
    dispatch(addMyPlans(skill))
  }

  return ( 
    <div className="main-page">
      <Row className="result-container">
      <Col span={6} className='col col-left'>
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
              <Text strong>Вакансий:</Text> {result.count_vacancy} <br />
              <Text strong>Период дней:</Text> {result.period} <br />
              <Text strong>Сайт:</Text> {result.web_site} <br />
              <Text strong>Город:</Text> {result.city || '---'} <br />
              <Text strong>Зарплата:</Text> {result.salary || '---'} <br />
              <Text strong>Дата запроса:</Text> {result.createdAt?.slice(0, 10)} <br />
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
          {report.map((el) => {
            return (<Text key={el[0]}>
                      <Text strong>
                        {`${el[0]} `}
                      </Text>
                      {el[1]}
                      &nbsp; &nbsp; 
                      <Tooltip title="add WhiteList">
                        <Button 
                          type="ghost" 
                          // type="text" 
                          shape="circle" 
                          icon={<EyeTwoTone />} 
                          size='small'
                          onClick={() => onClickWhite(el[0])} />
                      </Tooltip>
                      &nbsp; 
                      <Tooltip title="add BlackList">
                        <Button 
                          type="ghost" 
                          // type="text" 
                          shape="circle" 
                          icon={<EyeInvisibleTwoTone />} 
                          size='small'
                          onClick={() => onClickBlack(el[0])} />
                      </Tooltip>
                      &nbsp; 
                      <Tooltip title="add MySkills">
                        <Button 
                          type="ghost" 
                          // type="text"
                          shape="circle" 
                          icon={<DatabaseTwoTone />} 
                          size='small'
                          onClick={() => onClickUserSkill(el[0])} />
                      </Tooltip>
                      &nbsp; 
                      <Tooltip title="add MyPlans">
                        <Button 
                          type="ghost" 
                          // type="text" 
                          shape="circle" 
                          icon={<CalendarTwoTone />} 
                          size='small'
                          onClick={() => onClickMyPlans(el[0])} />
                      </Tooltip>
                      <br />
                    </Text>)})}
          </div>
        </div>
      </Col>
    </Row>
    </div>
   );
}
export default Result;

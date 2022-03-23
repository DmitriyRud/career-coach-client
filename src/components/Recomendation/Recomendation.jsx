import React from 'react';
import '../Recomendation/styles.modules.css';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRecomendationAT } from '../../redux/thunk/recomendationAT';


const Recomendation = () => {
  const recomData = useSelector((store) => store.recom.recom);
  const userId = useSelector((store) => store.users).id;
  const skills = useSelector((store) => store?.userSkills);
  const allResults = useSelector((store) => store.result.report);
  console.log('recomData', recomData);
  const {result_id} = useParams();
  const dispatch = useDispatch();
  // console.log(result_id);
  useEffect(() => {
    dispatch(getRecomendationAT(result_id, userId, skills, allResults));
  }, [])
  return ( 
    <div className="main-page">
      <h1>Вот мои рекомендации по навыкам и составлению резюме/портфолио:</h1>
      <Row className="recomendation-container" >
        <Col span={10} className='col-recom col-recom-left'>
          <h2 className='h2-recommend'>Необходимо изучить:</h2>
          {recomData?.toLearn?.map((el, i) => {
            return (
              <div key={i} className="skill-div li" ><span>{el}</span></div>
            )
          })}
        </Col>
        <Col span={10} className='col-recom'>
          <h2 className='h2-recommend'>...перечислить в резюме и добавить в портфолио проекты с:</h2>
          {recomData?.skillsDESC5?.map((el, i) => {
            return (
              <div key={i} className="skill-div li" ><span>{el.skill}</span></div>
            )
          })}
        </Col>
      </Row>
      <Row className="recomendation-container" >
        <Col span={10} className='col-recom col-recom-left'>
          <h2 className='h2-recommend'>... и повысить навыки:</h2>
          {recomData?.toImprove?.map((el, i) => {
            return (
              <div key={i} className="skill-div li" ><span>{el}</span></div>
            )
          })}
        </Col>
        <Col span={10} className='col-recom'>
          <h2 className='h2-recommend'>...также желательно указать в резюме и добавить в портфолио проекты с:</h2>
          {recomData?.skillsDESCnext5?.map((el, i) => {
            return (
              <div key={i} className="skill-div li" ><span>{el.skill}</span></div>
            )
          })}
        </Col>
      </Row>
      
    </div>
   );
}
 
export default Recomendation;

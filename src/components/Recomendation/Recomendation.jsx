import React from 'react';
import './Recomendation.css';
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
      <Row className="recomendation-container" >
        <Col span={10} className='col-recom col-recom-left'>
          <h1>Изучить/Подтянуть:</h1>
          {recomData.map((el) => {
            return (
              <div className="skill-div li" ><span>{el}</span></div>
            )
          })}
        </Col>
        <Col span={10} className='col-recom'>
          <h1>Портфолио:</h1>
        </Col>
      </Row>
      
    </div>
   );
}
 
export default Recomendation;

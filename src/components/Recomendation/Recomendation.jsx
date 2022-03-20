import React from 'react';
import './Recomendation.css';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRecomendationAT } from '../../redux/thunk/recomendationAT';
import { List, Typography, Divider } from 'antd';


const Recomendation = () => {
  const recomData = useSelector((store) => store.recom.recom)
  console.log('recomData', recomData);
  const {result_id} = useParams();
  const dispatch = useDispatch();
  // console.log(result_id);
  useEffect(() => {
    dispatch(getRecomendationAT(result_id))
  }, [])
  return ( 
    <div>
      <Row className="recomendation-container">
        <Col span={11} className='col-recom col-recom-left'>
          <h1>Изучить/Подтянуть:</h1>
          <div>
           
            <List
              bordered
              dataSource={recomData}
              renderItem={item =>  <div className="skill-div"><span>{item}</span></div>}
            />
          </div>
        </Col>
        <Col span={11} className='col-recom'>
          <h1>Портфолио:</h1>
        </Col>
      </Row>
      
    </div>
   );
}
 
export default Recomendation;

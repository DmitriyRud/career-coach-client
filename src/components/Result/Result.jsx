import React from "react";
import { getResultAT, getReportAT } from "../../redux/thunk/resultAT";
import { Row, Col } from 'antd';
import { Typography, Space } from 'antd';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import './Result.css'

const { Text } = Typography; // Link для ссылки добавить
// заглушка ответа от БД по конткретному результату
const response = {
  search_string: 'Junior JavaScript',
  count_vacancy: 400,
  period: 86400, // в секундах, Дима знает как положить их правильно
  city: 'Москва',
  salary: null,
  createdAt: '2022-03-17 19:09:36.420 +0300',
}

// заглушка ответа БД для отчета
// const report = [['React', 132], ['JavaScript', 456], ['Redux', 97], ['GIT', 247]]

const Result = ({ result_id }) => {
  // console.log(result_id);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result.result)
  const report = useSelector((state) => state.result.report)
  console.log('DATA to STATE RESULT>>>>>  ', result);
  console.log('DATA to STATE REPORT>>>>>  ', report);
  useEffect(() => {
    dispatch(getResultAT(result_id));
    dispatch(getReportAT(result_id));
  }, [])


  return ( 
    <div>
      <Row>
      <Col span={6} style={{borderRight: '2px solid black'}}>
        <div style={{backgroundColor: 'green'}}>
          <Space className="result-column-left" direction="vertical">
            <div style={{padding: '10px', borderBottom: '2px solid black', height: '5em'}}>
            <Text strong>
              Запрос: 
            </Text>
            <br />
            <Text>
              {result.search_string}
            </Text>
            </div>
            {/* <hr style={{borderColor: 'black'}}/> */}
            <div style={{padding: '10px'}}>
            <Text >
              <Text strong>Вакансий:</Text> {result.count_vacancy} <br />
              <Text strong>Период дней:</Text> {result.period / 86400} <br />
              <Text strong>Сайт:</Text> {result.web_site} <br />
              <Text strong>Город:</Text> {result.city || '---'} <br />
              <Text strong>Зарплата:</Text> {result.salary || '---'} <br />
              <Text strong>Дата запроса:</Text> {result.createdAt?.slice(0, 10)} <br />
            </Text>

            </div>
          </Space>
        </div>
      </Col>
      <Col span={10}>
        <div style={{backgroundColor: 'red'}}>
        <div style={{padding: '10px', borderBottom: '2px solid black', height: '5em'}}>
          <Text strong>
            Рейтинг навыков: 
          </Text>
          </div>
          <div style={{padding: '10px'}}>
          {report.map((el) => <Text key={el[0]}><Text strong>{`${el[0]}`}</Text> {el[1]} <br /></Text>)}
          </div>
        </div>
      </Col>
    </Row>
    </div>
   );
}
export default Result;

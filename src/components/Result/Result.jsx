import React from "react";
import { Row, Col } from 'antd';
import { Typography, Space } from 'antd';
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
  updatedAt: '2022-03-17 19:09:36.420 +0300',
}

// заглушка ответа БД для отчета
const report = [['React', 132], ['JavaScript', 456], ['Redux', 97], ['GIT', 247]]

const Result = () => {
  return ( 
    <div>
      <Row>
      <Col span={6} style={{borderRight: '2px solid black'}}>
        <div style={{backgroundColor: 'green'}}>
          <Space className="result-column-left" direction="vertical">
            <div style={{padding: '10px'}}>
            <Text strong>
              Запрос: 
            </Text>
            <br />
            <Text>
              {response.search_string}
            </Text>
            </div>
            <hr style={{borderColor: 'black'}}/>
            <div style={{padding: '10px'}}>
            <Text >
              <Text strong>Вакансий:</Text> {response.count_vacancy} <br />
              <Text strong>Период дней:</Text> {response.period / 86400} <br />
              <Text strong>Сайт:</Text> {response.count_vacancy} <br />
              <Text strong>Город:</Text> {response.city} <br />
              <Text strong>Зарплата:</Text> {response.salary} <br />
              <Text strong>Дата запроса:</Text> {response.createdAt.slice(0, 10)} <br />
            </Text>

            </div>
          </Space>
        </div>
      </Col>
      <Col span={18}>
        <div style={{backgroundColor: 'red'}}>
        <div style={{padding: '10px'}}>
          <Text strong>
            Рейтинг навыков: 
          </Text>
          </div>
          <hr style={{borderColor: 'black'}}/>
          <div style={{padding: '10px'}}>
          {report.map((el) => <Text><Text strong>{`${el[0]}`}</Text> {el[1]} <br /></Text>)}
          </div>
        </div>
      </Col>
    </Row>
    </div>
   );
}
export default Result;

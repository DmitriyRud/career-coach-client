import './Search.css';

import {
  Form,
  Input,
  Button,
  InputNumber,
  Switch,
  Slider,
  Select,
} from 'antd';
import { FundTwoTone } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { analizeAC } from '../../redux/thunk/apiAC';

const { Option } = Select;

const Search = () => {
  const store = useSelector((store) => store.users);
   const dispatch = useDispatch();

  const cities = ['Москва', 'Санкт-Петербург', 'Краснодар', 'Самара', 'Казань', 'Саратов'];

  const [websites, setWebsites] = useState('hh');

  function handleChange(value) {
    //console.log(`selected ${value}`);
    setWebsites(value);
  }

  const onFinish = (values) => {
    values.city = cities[values.city];
    console.log('Success:', values);
    dispatch(analizeAC(values)); 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (store.name) {
    return (
      <div className="main-page">
        <div className="headers">
          <h1>Анализ вакансий</h1>
          <h1>Результаты предыдущих запросов</h1>
        </div>
        <div className="search-page">

          <div className="filters-page">
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                remember: true,
                websites: [websites],
                method: "api"
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              websites={[websites]}
            >

              <Form.Item name="title" label="Профессия" rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item name="amount" label="Проверить" >
                <InputNumber min={1} max={10000} style={{ width: 200 }} />
              </Form.Item>
              <p className='explain'>*какое количество вакансий анализировать</p>

              <Form.Item name="period" label="Период">
                <Slider min={1} max={30}
                  marks={{
                    1: '1',
                    7: '7',
                    14: '14',
                    30: '30',
                  }}
                />
              </Form.Item>

              {/* </div> */}
              <Form.Item name="city" label="Город" >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Россия"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {cities.map((el, i) => <Option key={i}>{el}</Option>)}
                </Select>
              </Form.Item>

              <Form.Item name="salary" label="Зарплата">
                <InputNumber style={{ width: 200 }} />
              </Form.Item>

              <Form.Item name="websites" label="Сайты:">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Выбери сайты для анализа"
                  defaultValue={['hh']}
                  onChange={handleChange}
                  optionLabelProp="label"
                >
                  <Option value="hh" label="HeadHunter">
                    <div className="demo-option-label-item">
                      HeadHunter
                    </div>
                  </Option>
                  <Option value="habr" label="Habr.Карьера">
                    <div className="demo-option-label-item">
                      Habr.Карьера
                    </div>
                  </Option>
                </Select>
              </Form.Item>


              <Form.Item label="Метод анализа" name="method"  >
                <Select defaultValue="api" style={{ width: 200 }} >
                  <Option key="1" value="api">API</Option>
                  <Option key="2" value="scrapping">Web-scrapping</Option>
                </Select>
              </Form.Item>

              <Form.Item label="&nbsp;">
                <div className="search-button" >
                  <Button type="primary" htmlType="submit" shape="round" icon={<FundTwoTone />} size={'large'} >
                    Начать анализ рынка вакансий
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>

          <div className="history-page">

          </div>

        </div>
      </div>
    );
  } else {
    return (<></>);
  }
}

export default Search;

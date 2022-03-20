import './Search.css';

import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Slider,
  AutoComplete,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';


import { useSelector } from 'react-redux';



const Search = () => {
  const store = useSelector((store) => store.users);

  

  if (store.name) {

    return (
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
          >

            <Form.Item name="title" label="Профессия">
              <Input />
            </Form.Item>
            {/* <div className="search-line"> */}
            {/* style={{border: "1px solid red"}} */}
            <Form.Item label="Проверить" >
              <Form.Item name="amount">
                <InputNumber min={1} max={10000} style={{"width": "10em"}} />
                <span className="ant-form-text"> вакансий</span>
              </Form.Item>
            </Form.Item>

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
            <Form.Item name="city" label="Город">
              <Input placeholder="Россия" />
            </Form.Item>

            <Form.Item name="salary" label="Зарплата">
              <InputNumber style={{"width": "10em"}}/>
            </Form.Item>

            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: 'Light',
                    value: 'light',
                    children: [
                      {
                        title: 'Bamboo',
                        value: 'bamboo',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item>
          </Form>
        </div>

        <div className="history-page">

        </div>

      </div>
    );
  } else {
    return (<></>);
  }
}

export default Search;

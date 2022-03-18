import './Search.css';

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Slider,
} from 'antd';
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
  
      <Form.Item label="Профессия">
        <Input />
      </Form.Item>
      <div className="search-line">
      <Form.Item label="Проверить" className='fullwidth flex-row'>
        <Form.Item name="input-number" noStyle >
          <InputNumber min={1} max={10000} />
        </Form.Item>
        <span className="ant-form-text"> вакансий</span>
      </Form.Item>

      <Form.Item name="slider" label="Период">
        <Slider
          marks={{
            1: 'День',
            2: 'Месяц',
            3: '3 мес.',
            4: '6 мес.',
            5: 'Год',
          }}
        />
      </Form.Item>
      
      </div>

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
}}
 
export default Search;

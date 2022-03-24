import "./Search.css";
import React from "react";

import { Form, Input, Button, InputNumber, Slider, Select } from "antd";
import { FundTwoTone } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { analizeAC } from "../../redux/thunk/apiAC";
import { useEffect } from "react";
import { getAllResultUserAT } from "../../redux/thunk/resultAT";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Search = () => {
  //const store = useSelector((store) => store.users);
  const allResults = useSelector((store) => store.result.resultAll);
  //console.log(allResults);
  const user = useSelector((store) => store.users);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Краснодар",
    "Самара",
    "Казань",
    "Саратов",
  ];

  const [websites, setWebsites] = useState("hh");
  const [newSearch, setNewSearch] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let navItems = Array.from(document.querySelectorAll(".ant-menu-item"));
    navItems.map((el) => el.classList.remove("ant-menu-item-selected"));
    document
      .querySelectorAll(".ant-menu-item")[2]
      .classList.add("ant-menu-item-selected");
  }, []);

  useEffect(() => {
    dispatch(getAllResultUserAT(user.id));
    //console.log('newSearch =========>', newSearch);
  }, [newSearch]);

  function handleChange(value) {
    //console.log(`selected ${value}`);
    setWebsites(value);
  }

  const onFinish = async (values) => {
    setLoading(true);
    values.city = cities[values.city];
    values.userId = user.id;
    //console.log('Success:', values);
    const resultId = await dispatch(analizeAC(values));
    //console.log('resultId from back ==== > ', ttt);
    setNewSearch((prev) => prev + 1);
    setLoading(false);
    navigate(`/result/${resultId}`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setLoading(false);
  };

  if (user.name) {
    return (
      <div className="main-page" style={{ position: "relative" }}>
        {loading && (
          <div
            class="loader"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div class="face">
              <div class="circle"></div>
            </div>
            <div class="face">
              <div class="circle"></div>
            </div>
          </div>
        )}
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
                method: "api",
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              websites={[websites]}
            >
              <Form.Item
                name="title"
                label="Профессия"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item name="amount" label="Проверить">
                <InputNumber min={1} max={10000} style={{ width: 200 }} />
              </Form.Item>
              <p className="explain">
                *какое количество вакансий анализировать
              </p>

              <Form.Item name="period" label="Период">
                <Slider
                  min={1}
                  max={30}
                  marks={{
                    1: "1",
                    7: "7",
                    14: "14",
                    30: "30",
                  }}
                />
              </Form.Item>

              {/* </div> */}
              <Form.Item name="city" label="Город">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Россия"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {cities.map((el, i) => (
                    <Option key={i}>{el}</Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="salary" label="Зарплата">
                <InputNumber style={{ width: 200 }} />
              </Form.Item>

              <Form.Item name="websites" label="Сайты:">
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Выбери сайты для анализа"
                  defaultValue={["hh"]}
                  onChange={handleChange}
                  optionLabelProp="label"
                >
                  <Option value="hh" label="HeadHunter">
                    <div className="demo-option-label-item">HeadHunter</div>
                  </Option>
                  <Option value="habr" label="Habr.Карьера">
                    <div className="demo-option-label-item">Habr.Карьера</div>
                  </Option>
                </Select>
              </Form.Item>

              <Form.Item label="Метод анализа" name="method">
                <Select defaultValue="api" style={{ width: 200 }}>
                  <Option key="1" value="api">
                    API
                  </Option>
                  <Option key="2" value="scrapping">
                    Web-scrapping
                  </Option>
                </Select>
              </Form.Item>

              <Form.Item label="&nbsp;">
                <div className="search-button">
                  <Button
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    icon={<FundTwoTone />}
                    size={"large"}
                  >
                    Начать анализ рынка вакансий
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>

          <div className="history-page">
            <div className="history-container">
              <ul className="profile-settings">
                {allResults.length !== 0 ? (
                  allResults.map((el) => {
                    return (
                      <li key={el.createdAt}>
                        <Link to={`/result/${el.id}`}>
                          {`${el.search_string} - ${el.createdAt.slice(
                            0,
                            10
                          )} / ${el.createdAt.slice(11, 19)} `}
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <h2>
                    Что бы получить рекомендацию сделайте свой первый запрос
                  </h2>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Search;

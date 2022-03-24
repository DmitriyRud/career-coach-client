import { Row, Col } from "antd";
import { Button, Tooltip } from "antd";
import { Typography, Space } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allFromLists } from "../../redux/actions/listsActions";
import { DeleteTwoTone } from "@ant-design/icons";
import {
  deleteFromList,
  allFromWhiteList,
  deleteAllWhiteList,
} from "../../redux/thunk/deleteFromList";

const { Text } = Typography;

const WhiteList = () => {
  const user = useSelector((store) => store.users);

  const listItems = useSelector((store) => store.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allFromWhiteList(user.id));
  }, [user.id]);

  const deleteHandler = (id, userId) => {
    dispatch(deleteFromList(id, userId));
  };

  return (
    <div className="main-page">
      <Row className="result-container">
        <Col span={10} className="col col-left">
          <div>
            <Space className="result-column-left" direction="vertical">
              <div className="column">
                <Text strong>White List</Text>
              </div>
              <div style={{ padding: "10px" }}>
                {listItems.map((el) => (
                  <div
                    className="skill-div"
                    key={el.createdAt}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text>{el.word}</Text>
                    <div className="div-btn">
                      <Tooltip title="delete">
                        <Button
                          danger
                          type="ghost"
                          // type="text"
                          shape="circle"
                          icon={<DeleteTwoTone twoToneColor="red" />}
                          size="small"
                          onClick={() => deleteHandler(el.id, user.id)}
                        />
                      </Tooltip>
                    </div>
                  </div>
                ))}
              </div>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhiteList;

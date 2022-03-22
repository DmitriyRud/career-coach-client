import { Row, Col } from 'antd';
import { Button, Tooltip } from 'antd';
import { Typography, Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allFromLists } from '../../redux/actions/listsActions'
import { DeleteTwoTone } from '@ant-design/icons';
import { deleteFromList, deleteAllWhiteList } from '../../redux/thunk/deleteFromList';

const { Text } = Typography; 

const WhiteList = () => {

  const listItems = useSelector(store => store.list);

  const user = useSelector((store) => store.users);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch (`/helper/whitelist/${user.id}`);
      if (response.ok) {
        const whiteList = await response.json();
        console.log('whitelist', whiteList);
        dispatch(allFromLists(whiteList))
      }
    }
    fetchData(); 
  }, [])

  const deleteHandler = (id, userId) => {
    console.log('deleteId', id, userId)

    dispatch(deleteFromList(id, userId));
  }

  const deleteAllHandler = (userId) => {
    console.log('userId', userId)
    dispatch(deleteAllWhiteList(userId));
  }


  return (
    <div className="main-page">
    <Row className="result-container">
    <Col span={10} className='col col-left'>
      <div>
        <Space className="result-column-left" direction="vertical">
          <div className="column" >
            <Text strong>
              White List 
            </Text>
          </div>   
        <div style={{padding: '10px'}}>
          {listItems.map(el => (
            <div className='skill-div' style={{display:"flex", justifyContent:"space-between"}}>
              <Text>{el.word}</Text>
            <div className="div-btn">
            <Tooltip title="delete">
              <Button danger
                type="ghost" 
                // type="text" 
                shape="circle" 
                icon={<DeleteTwoTone twoToneColor="red"/>} 
                size='small'
                onClick={() => deleteHandler(el.id, user.id)} />
            </Tooltip>
            </div>
            </div>
          ))}
        </div>
        </Space>
        <div style={{display:"flex", justifyContent:"center"}}><Button onClick={()=> deleteAllHandler(user.id)} style={{marginBottom:"5px"}} danger>Очистить все</Button></div>
      </div>
    </Col>
    </Row>
    </div>
  );
}
 
export default WhiteList;

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editProfileAC } from '../../redux/thunk/usersAC';
import { setFio} from '../../redux/actions/profileAction';
import React, { useContext } from 'react';


import './edit.css'
import { Context } from '../Context/Context'

const EditName = () => {

  const user = useSelector((store) => store.users);
  const btnState = useSelector((store) => store.button.fio)

  const { setUserName, userName } = useContext(Context);


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(editProfileAC({ id:user.id, fio: e.target.fio.value }));
    // navigate('/users/profile');
    dispatch(setFio(!btnState))
  }

  console.log('userName', userName)
  return (
    <form onSubmit={submitHandler}>
    <input name="fio" className="edit-input" type="text" id="fname" onChange={(e) => setUserName(e.target.value)} value = {userName !== '' ? userName : user.fio} /*placeholder={user.fio !== null ? user.fio : ("Ваше имя...")} *//>  
    <input className="edit-submit" type="submit" value="Сохранить"/>
  </form>
  );
}
 
export default EditName;

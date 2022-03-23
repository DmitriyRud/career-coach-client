import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editProfileAC } from '../../redux/thunk/usersAC';
import { setFio} from '../../redux/actions/profileAction';
import React from 'react';


import './edit.css'

const EditName = () => {

  const user = useSelector((store) => store.users);
  const btnState = useSelector((store) => store.button.fio)


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(editProfileAC({ id:user.id, fio: e.target.fio.value }));
    // navigate('/users/profile');
    dispatch(setFio(!btnState))
  }

  return (
    <form onSubmit={submitHandler}>
    <input name="fio" className="edit-input" type="text" id="fname" placeholder={user.fio !== null ? user.fio : ("Ваше имя...")}/>  
    <input className="edit-submit" type="submit" value="Сохранить"/>
  </form>
  );
}
 
export default EditName;

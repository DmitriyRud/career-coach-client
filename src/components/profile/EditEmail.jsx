import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProfileAC } from '../../redux/thunk/usersAC';
import { setEmail } from '../../redux/actions/profileAction';
import './edit.css'
import React, { useContext } from 'react';
import { Context } from '../Context/Context'


const EditEmail = () => {

  const user = useSelector((store) => store.users);
  const btnState = useSelector((store) => store.button.email)

  const { setUserEmail, userEmail } = useContext(Context);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(editProfileAC({ id:user.id, email: e.target.email.value }));
    // navigate('/users/profile');
    dispatch(setEmail(!btnState))
  }

  return (
    <form onSubmit={submitHandler}>
    <input className="edit-input" type="email" id="fname" name="email" onChange={(e) => setUserEmail(e.target.value)} value = {userEmail !== "" ? userEmail : user.email} /*placeholder={user.email}*//>  
    <input className="edit-submit" type="submit" value="Сохранить"/>
  </form>
  );
}
 
export default EditEmail;

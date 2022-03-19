import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProfileAC } from '../../redux/thunk/usersAC';
import './edit.css'

const EditEmail = () => {

  const user = useSelector((store) => store.users);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(editProfileAC({ id:user.id, email: e.target.email.value }));
    navigate('/profile');
  }

  return (
    <form onSubmit={submitHandler}>
    <input className="edit-input" type="text" id="fname" name="email" placeholder={user.email}/>  
    <input className="edit-submit" type="submit" value="Сохранить"/>
  </form>
  );
}
 
export default EditEmail;

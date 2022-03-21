import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sha256 from 'sha256';
import { editProfileAC } from '../../redux/thunk/usersAC';
import { setPassword } from '../../redux/actions/profileAction';
import './edit.css'

const EditPassword = () => {

  const user = useSelector((store) => store.users);
  const btnState = useSelector((store) => store.button.password)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(editProfileAC({ id:user.id, password: sha256(e.target.password.value)}));
    // navigate('/users/profile');
    dispatch(setPassword(!btnState))
  }

  return (
    <form onSubmit={submitHandler}>
    <input className="edit-input" type="text" id="fname" name="password" placeholder="Ваш пароль..."/>  
    <input className="edit-submit" type="submit" value="Сохранить"/>
  </form>
  );
}
 
export default EditPassword;

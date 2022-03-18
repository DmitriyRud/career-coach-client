import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUserAC, logoutUserAC } from "../../redux/thunk/usersAC";

const Logout = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(logoutUserAC());
  navigate("/");


  return (
    <></>
  );
}
 
export default Logout;

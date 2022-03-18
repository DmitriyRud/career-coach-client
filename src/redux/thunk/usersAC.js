import { loginUser } from '../actions/usersAction';
import { useNavigate } from "react-router-dom";

const axios = require('axios');

export const loginUserAC = (data) => {
  
  return async (dispatch) => {
    //console.log('beforeFetch');
    try {
    const response = await fetch('/auth/signin', { method:'POST', headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
    if (response.ok) {
      //console.log(response);
      const result = await response.json();
      dispatch(loginUser(result));
      if (result.name){
        console.log('login successful');
      }
      } else {
        const message = document.querySelector('.message');
        message.innerHTML = 'Неверное имя пользователя или пароль. Попробуйте еще раз';
        setTimeout(()=>{
          message.innerHTML = '&nbsp;';
        }, 2000);
      }
    } catch(err) {
        console.log('Error login: ', err);
      }

    }
};

export const registerUserAC = (data) => {
  return async (dispatch) => {
    const response = await fetch('/auth/signup', { method:'POST', headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
    if (response) {
      const result = await response.json();
      //console.log(result);
      dispatch(loginUser(result));
    }
  };
};

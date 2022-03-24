import { editProfile, loginUser, getUserData } from '../actions/usersAction';
import axios from 'axios';

export const loginUserAC = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/auth/signin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
      if (response.ok) {
        const result = await response.json();
        dispatch(loginUser(result));
        if (result.name) {
          console.log("login successful");
          const userState = {name: result.name, password: data.password};
          
          //console.log('Userstate ======> ', userState);

          localStorage.setItem('userstate', JSON.stringify(userState));
        } 
      } else {
        //localStorage.removeItem('userstate');
        const message = document.querySelector(".message");
        message.innerHTML =
          "Неверное имя пользователя или пароль. Попробуйте еще раз";
        setTimeout(() => {
          message.innerHTML = "&nbsp;";
        }, 2000);
      }
    } catch (err) {
      console.log("Error login: ", err);
    }
  };
};

export const registerUserAC = (data) => {
  return async (dispatch) => {
    const response = await fetch('/auth/signup', { method:'POST', headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
    if (response.ok) {
      const result = await response.json();
      dispatch(loginUser(result));
    }
  };
};

export const editProfileAC = (data) => {
  return async (dispatch) => {
    const response = await fetch(`/users/profile`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      dispatch(editProfile(result));
    }
  };
};

export const uploadAvatarAC = (file, id) => {
  return async (dispatch) => {
    const data = new FormData();
    data.append('file', file);
    data.append('id', id)
    // console.log(Object.fromEntries(data));
   const response = await axios.put('/users/profile', data)
  //  console.log('response', response)
      dispatch(editProfile(response.data));
    
  };
};

export const checkUserAC = () => {
  
  
  return async (dispatch) => {
    const userState = localStorage.getItem("userstate") ? JSON.parse(localStorage.getItem("userstate")) : {};
    //console.log('Userstate in checkUserAC ======> ', userState);
    
    const values = {};
    values.name = userState.name;
    values.password = userState.password;
    const answer = await dispatch(loginUserAC(values));
    console.log(answer);

    const response = await fetch('/auth/checkiflogged', { method:'GET'});
    if (response.ok) {
      const result = await response.json();
      // console.log('Already logged: ',result);
      dispatch(loginUser(result));
    }  
  }
}

export const logoutUserAC = () => {
  localStorage.removeItem('userstate');
  return async (dispatch) => {
    localStorage.removeItem('userstate')
    const response = await fetch('/auth/signout', { method:'GET'});
    if (response.ok) {
      dispatch(loginUser({}));
    }    
  }
}

export const getUserDataAC = () => {
  return async (dispatch) => {
    // console.log('Санки старт!!!');
    const response = await fetch('/users/data');
    // console.log('response >>> ', response);
    if(response.ok) {
      const answer = await response.json();
      // console.log('getUserDataAC >>>> ', answer);
      dispatch(getUserData(answer))
    }
  }
}

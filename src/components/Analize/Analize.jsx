import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { analizeAC } from '../../redux/thunk/apiAC';
import React from 'react';


const Analize = () => {
  const dispatch = useDispatch();
  const data = {
    title: 'JavaScript',
    amount: 2,
    days: 10,
    city: 'Москва',
    salary: 100000,
  };

  useEffect(()=>{
   dispatch(analizeAC(data)); 
  },[]);
  

  return ( 
    <></>
   );
}
 
export default Analize;

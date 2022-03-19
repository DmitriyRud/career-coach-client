import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { analizeAC } from '../../redux/thunk/apiAC';


const Analize = () => {
  const dispatch = useDispatch();
  const data = {
    title: 'testVacancy',
    amount: 10,
    days: 30,
    city: 'Москва',
    salary: '100000',
  };

  useEffect(()=>{
   dispatch(analizeAC(data)); 
  },[]);
  

  return ( 
    <></>
   );
}
 
export default Analize;

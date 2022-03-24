import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => { 
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  return <Context.Provider value={{ userName, setUserName, userEmail, setUserEmail }}>{ children }</Context.Provider>
}

export default ContextProvider;

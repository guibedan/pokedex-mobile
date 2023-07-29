import { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export function MyContextProvider({ children }) {
  const [language, setLanguage] = useState('English');
  const [ref, setRef] = useState(false)
  const [darkMode, setDarkMode] = useState({
    bg: '#fff',
    cl: '#000',
    bgTab: '#fff',
    brd: '#ccc'
  });

  const setLanguePt = () => {
    setLanguage('Português');
  };

  const setLangueEn = () => {
    setLanguage('English');
  };

  const setMode = () => {
    setDarkMode(ref ? {bg: '#fff', cl: '#000', bgTab: '#fff', brd: '#ccc'} : {bg: '#000', cl: '#fff', bgTab: '#171717', brd: '#171717'})
    setRef(!ref)
  }


  return (
    <MyContext.Provider value={{ language, setLanguePt, setLangueEn, setMode, darkMode, ref }}>
      {children}
    </MyContext.Provider>
  );
}
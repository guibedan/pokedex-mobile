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
  const [texts, setTexts] = useState({
    search: 'Search',
    list: 'List',
    settings: 'Settings',
    placeholder: 'Enter pokemon name',
    lang: 'Language',
    dark: 'Dark Mode',
    back: 'back'
  })

  const setLanguePt = () => {
    setLanguage('Português');
    setTexts({
      search: 'Procurar',
      list: 'Lista',
      settings: 'Configurações',
      placeholder: 'Digite o nome do pokemon',
      lang: 'Linguagem',
      dark: 'Modo escuro',
      back: 'voltar'
    })
  };

  const setLangueEn = () => {
    setLanguage('English');
    setTexts({
      search: 'Search',
      list: 'List',
      settings: 'Settings',
      placeholder: 'Enter pokemon name',
      lang: 'Language',
      dark: 'Dark Mode',
      back: 'back'
    })
  };


  const setMode = () => {
    setDarkMode(ref ? {bg: '#fff', cl: '#000', bgTab: '#fff', brd: '#ccc'} : {bg: '#000', cl: '#fff', bgTab: '#171717', brd: '#171717'})
    setRef(!ref)
  }


  return (
    <MyContext.Provider value={{ language, setLanguePt, setLangueEn, setMode, darkMode, ref, texts }}>
      {children}
    </MyContext.Provider>
  );
}
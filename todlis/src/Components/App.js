import { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import '../Styles/App.css';
import '../Styles/Themes.css';
import Content from './Content';
import Header from './Header';

export default function App(props)
{
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("User")) || null);
  const [theme, setTheme] = useState(user?.preferences?.theme || "light");
  const [view, setView] = useState(user ? `Home.${user.preferences.startView}` : "Initial");
  
  useEffect(() =>
  {
    localStorage.setItem("User", JSON.stringify(user));
  }, [user]);

  useLayoutEffect(() =>
  { 
    document.body.classList.add(`${theme}-background`);
  }, [theme]);
  
  return(
    <Fragment>
      <Header />
      <Content user={user} setUser={setUser} theme={theme} setTheme={setTheme} view={view} setView={setView} />
    </Fragment>
  );
}
import { Fragment, useEffect, useState } from 'react';
import '../Styles/App.css';
import Content from './Content';
import Header from './Header';

export default function App(props)
{
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("User")) || null);
  const [view, setView] = useState(user ? `Home.${user.preferences.startView}` : "Initial");
  
  useEffect(() =>
  {
    localStorage.setItem("User", JSON.stringify(user));
  }, [user]);
  
  return(
    <Fragment>
      <Header />
      <Content user={user} setUser={setUser} view={view} setView={setView} />
    </Fragment>
  );
}
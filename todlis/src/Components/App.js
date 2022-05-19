import { Fragment, useState } from 'react';
import '../Styles/App.css';
import Content from './Content';
import Header from './Header';

export default function App(props)
{
  const [view, setView] = useState(JSON.parse(localStorage.getItem("isUser")) ? "Home.Welcome" : "Initial");

  return(
    <Fragment>
      <Header />
      <Content view={view} setView={setView} />
    </Fragment>
  );
}
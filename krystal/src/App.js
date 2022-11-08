import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import WelcomeBanner from './components/WelcomeBanner';

export default function App(props)
{
  return (
    <BrowserRouter>
      <WelcomeBanner />
      <Header/>
      <Content />
      <Footer />
    </BrowserRouter>
  );
}
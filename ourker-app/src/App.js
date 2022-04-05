// import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import UserChat from './pages/UserChat';
import NavBar from './components/Navbar'
import ChatWorker from './pages/ChatWorker';
import CreateReport from './pages/CreateReport';
import Search from './pages/Search';
import Perfil from './pages/Perfil';


function App() {
  return (
    <Fragment>
      <NavBar/>
      <Helmet> <title>Ourker</title> </Helmet>
      <Perfil/> 
    </Fragment>
  );
}

export default App;

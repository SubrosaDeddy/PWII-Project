// import logo from './logo.svg';
// import './App.css';
import {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import UserChat from './pages/UserChat';
import NavBar from './pages/Navbar'
import ChatWorker from './pages/ChatWorker';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Helmet> <title>Ourker</title> </Helmet>
      <ChatWorker/> 
    </Fragment>
  );
}

export default App;

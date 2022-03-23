// import logo from './logo.svg';
// import './App.css';
import {Fragment} from 'react';
import {Helmet} from "react-helmet";
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import UserChat from './pages/UserChat';

function App() {
  return (
  
    <Fragment>
      <Helmet> <title>Ourker</title> </Helmet>
      <UserChat/>
    </Fragment>
  );
}

export default App;

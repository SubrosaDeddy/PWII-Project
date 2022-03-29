// import logo from './logo.svg';
// import './App.css';
import {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import UserChat from './pages/UserChat';
import NavBar from './components/Navbar'
import ChatWorker from './pages/ChatWorker';
import CreateReport from './pages/CreateReport';
import CreatePost from './pages/CreatePost';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (

    <Fragment>
    

      <NavBar/>
      <Helmet> <title>Ourker</title> </Helmet>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="SignIn" element={<SignIn/>} />
      <Route exact path="LogIn" element={<LogIn/>} />
      <Route exact path="CreateReport" element={<CreateReport/>} />
      <Route exact path="CreatePost" element={<CreatePost/>} />
      <Route exact path="Prueba" element={<UserChat/>} />
      </Routes>
     

    </Fragment>
  );
}

export default App;

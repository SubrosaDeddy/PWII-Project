import './App.css';
import {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import NavBar from './components/Navbar'
import UserNavbar from './components/UserNavbar'
import ChatWorker from './pages/ChatWorker';
import CreateReport from './pages/CreateReport';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost'
import Report from './pages/Report'
import Perfil from './pages/Perfil'
import Search from './pages/Search';
import EditProfile from './pages/EditProfile';
import { Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <Fragment>
      {/* <NavBar/> */}
      <UserNavbar/>
      <Helmet> <title>Ourker</title> </Helmet>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="SignIn" element={<SignIn/>} />
        <Route exact path="LogIn" element={<LogIn/>} />
        <Route exact path="CreateReport" element={<CreateReport/>} />
        <Route exact path="CreatePost" element={<CreatePost/>} />
        <Route exact path="Chat" element={<ChatWorker/>} />
        <Route exact path="ViewPost" element={<ViewPost/>} />
        <Route exact path="Report" element={<Report/>} />
        <Route exact path="Perfil" element={<Perfil/>} />
        <Route exact path="Search" element={<Search/>} />
        <Route exact path="Edit" element={<EditProfile/>} />
      </Routes>
    </Fragment>
  );
}

export default App;

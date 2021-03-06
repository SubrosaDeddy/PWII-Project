import './App.css';
import {Fragment, useEffect, useState} from 'react';
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
  const [user, setUser] = useState("");
  const [worker, setWorker] = useState(null);
 
  useEffect(() => {
      sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <Fragment>
      <Helmet> <title>Ourker</title> </Helmet>
      <NavBar render={!user}/>
      <UserNavbar user={user} work ={worker} setLoggedUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<Home user={user} work ={worker}/>} />
        <Route exact path="SignIn" element={<SignIn setLoggedUser={setUser} setLoggWorker ={setWorker}/>}/>
        <Route exact path="LogIn" element={<LogIn setLoggedUser={setUser} setLoggWorker = {setWorker}/>}/>
        <Route exact path="CreateReport" element={<CreateReport/>} />
        <Route exact path="CreatePost" element={<CreatePost user={user}/>} />
        <Route exact path="Chat" element={<ChatWorker user={user}/>} />
        <Route exact path="ViewPost/:postID" element={<ViewPost user={user}/>} />
        <Route exact path="Report" element={<Report/>} />
        <Route exact path="Perfil" element={<Perfil user={user}/>} />
        <Route exact path="Search" element={<Search/>} />
        <Route exact path="Edit" element={<EditProfile  user={user} work ={worker} setLoggedUser={setUser}/>} />
      </Routes>
    </Fragment>
  );
}

export default App;

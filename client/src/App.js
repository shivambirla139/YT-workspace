import './App.css';
import {React,useEffect,useState} from 'react';
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/Navbar';
import LoginForm from './Components/login/LoginForm';
import SignUpForm from './Components/login/SignupForm';
import { getUserData } from './services/api';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar user={user}/>
          <Routes>
            <Route path ="/login" element = {<LoginForm  /> } />
            <Route path ="/signup" element = {<SignUpForm/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

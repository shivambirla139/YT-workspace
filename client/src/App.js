import './App.css';
import {React} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/Navbar';
import LoginForm from './Components/login/LoginForm';
import SignUpForm from './Components/login/SignupForm';
import Home from './Components/Home';
import Posts from "./Components/Posts/Posts"
function App() { 
  const user = false;
  return (
    <div className='App'>
         <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path ="/login" element = {<LoginForm  /> } />
            <Route path ="/signup" element = {<SignUpForm/>}/>
            <Route path = "/" element = {<Home/> } />
          </Routes>
          <Posts /> 
      </BrowserRouter>

    </div>
  );
}

export default App;

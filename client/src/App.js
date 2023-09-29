import './App.css';
import {React} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/Navbar';
import LoginForm from './Components/login/LoginForm';
import SignUpForm from './Components/login/SignupForm';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path ="/login" element = {<LoginForm  /> } />
            <Route path ="/signup" element = {<SignUpForm/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

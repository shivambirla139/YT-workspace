import './App.css';
import {React} from 'react';
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom';
import NavBar from './Components/Navbar';
import LoginForm from './Components/login/LoginForm';
import SignUpForm from './Components/login/SignupForm';
import Home from './Components/Home';
import Profile from './Components/login/Profile';
import Logout from './Components/login/Logout';
import Posts from "./Components/Posts/Posts";
import AddPost from './Components/Posts/AddPost';
import { useSelector } from 'react-redux';
function App() { 
  const data = useSelector(state => state.user.data);
  
  var isAuthenticated ; 
  if(data && data.data.accessToken){
    isAuthenticated = true;
    //navigate("/");
  }else {
    isAuthenticated = false;
    //navigate("/login");
  }
  return (
    <div className='App'>
         <BrowserRouter>
          <NavBar />
          {isAuthenticated ? (<Routes>
            <Route component={<Posts/>}/>
            <Route path ="/logout" element = {<Logout  /> } />
            <Route path ="/profile" element = {<Profile  /> } />   
            <Route path ="/addpost" element = {<AddPost  /> } />   
            <Route path ="/allposts" element = {<Posts  /> } />            
          </Routes> ) :
          (
            <Routes>
            <Route component={<Posts/>}/>

            <Route default path ="/allposts" element = {<Posts  /> } />            

            <Route path ="/login" element = {<LoginForm  /> } />
            
            <Route path ="/signup" element = {<SignUpForm/>}/>
          </Routes> 
          )}
      </BrowserRouter>

    </div>
  );
}

export default App;

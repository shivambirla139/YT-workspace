import './App.css';
import {React,useEffect,useState} from 'react';
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/Navbar';
import LoginForm from './Components/login/LoginForm';
import SignUpForm from './Components/login/SignupForm';
import { getUserData } from './services/api';
function App() {

    const [accessToken,setAccessToken] = useState(null);
    const [user,setUser] = useState(null);
    useEffect(()=>{
        var useraccesstoken = sessionStorage.getItem('useraccesstoken');
        async function getUser(){
            if(useraccesstoken!=null){
                try{
                    const response = await getUserData();
                    console.log(response);
                }catch (e){
                    console.log(e.message);
                }
            }
        }
        getUser();
        setAccessToken(useraccesstoken);
    },[]);

    function changeStates(obj){
      setAccessToken(obj.accessToken);
    }

  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar user={user}/>
          <Routes>
            <Route path ="/login" element = {<LoginForm changeStates={changeStates} /> } />
            <Route path ="/signup" element = {<SignUpForm/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

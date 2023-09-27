import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';
import {React,useEffect,useState} from 'react';

const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    const [accessToken,setAccessToken] = useState(null);

    useEffect(()=>{
        const useraccesstoken = localStorage.getItem('useraccesstoken');
        setAccessToken(useraccesstoken);
    },[]);
    
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="/login" exact>Login</Tabs>
                <Tabs to="/signup" exact>SignUp</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;
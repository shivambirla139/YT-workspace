import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import {React, useEffect} from 'react';
import {useSelector} from 'react-redux';
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
    const data = useSelector(state => state.user.data);
    const navigate = useNavigate();
  
  var isAuthenticated ; 
  if(data && data.data.accessToken){
    isAuthenticated = true;
    //navigate("/");
  }else {
    isAuthenticated = false;
    //navigate("/login");
  }

    return (
        <Header position="static">
                <Toolbar>
                    {isAuthenticated? 
                        (<>
                            <Tabs to="/logout" exact>Logout</Tabs>
                            <Tabs to="/profile" exact>Profile</Tabs>
                            <Tabs to="/addpost" exact>Add Post</Tabs>
                            <Tabs to="/allposts" exact>All Posts</Tabs>
                        </>)
                        :
                            ( <>
                                <Tabs to="/login" exact>Login</Tabs>
                                <Tabs to="/signup" exact>SignUp</Tabs>
                            </>)
                    }
                </Toolbar>

        </Header>
    )
}

export default NavBar;
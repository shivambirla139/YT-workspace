import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';
import {React,useEffect,useState} from 'react';
import { getUserData } from '../services/api';

const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = ({user}) => {
    
    
    return (
        <Header position="static">
            {
                user==null
                 ?
             
                (<Toolbar>
                <Tabs to="/login" exact>Login</Tabs>
                <Tabs to="/signup" exact>SignUp</Tabs>
                </Toolbar>)
                :
                (<h1> aw</h1>)

                    

            }
        </Header>
    )
}

export default NavBar;
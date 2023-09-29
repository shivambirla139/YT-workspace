import { useState } from 'react';

import { Box, Typography, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

// css components
import { Component, Container, AccountBox, InputTextField, StyledButton, Error, StyledText,DisplayText } from './AccountStyles';

import { loginUser } from '../../services/api';



const loginInitialValues = {
    email: '',
    password: ''
};

const LoginForm = () => {
    const [login, setLogin] = useState(loginInitialValues);
    const [showPassword, setShowPassword] = useState(false);
    const [error, showError] = useState('');
    const dispatch = useDispatch();


    const navigate = useNavigate();
   


    const onValueChange = (e) => {
        showError('');
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onLoginButtonClick = async () => {
        const response = await loginUser(login);
        console.log(response);
        if (response.status === 200) {

            setLogin(loginInitialValues);

            dispatch(setLogin({user:login,token:response.data}));

            navigate('/');
            return;
        }   
        
        showError(response.data.message);
    }

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    }

    return (
        <Component>
            <Container style={{ marginRight: 50, flexDirection: 'row' }}>
                <Box>
                    <AccountBox>
                        <DisplayText>Login </DisplayText>
                        
                        <InputTextField 
                            placeholder="email"
                            value={login.email} 
                            onChange={(e) => onValueChange(e)} 
                            name='email'
                         />
                        <InputTextField onChange={(e) => onValueChange(e)} 
                            name='password' placeholder="Password" type={showPassword ? 'text' : 'password'} 
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleShowPassword()}
                                    >
                                        <Typography style={{ fontSize: 14, fontWeight: 600 }}>{showPassword ? 'Hide' : 'Show'}</Typography>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        
                        {error && <Error>{error}</Error>}

                        <StyledButton variant="contained" onClick={() => onLoginButtonClick()}>Log In</StyledButton>
                        
                        
                        <Typography style={{ color: '#00376b', fontSize: 12, marginBottom: 20 }}>Forgot Password?</Typography>
                    </AccountBox>
                    <AccountBox>
                        <Box  style={{ padding: '20px 40px' }}>
                            <StyledText>
                                Don't have an account? <Box component="span" style={{ color: '#0095f6', cursor: 'pointer' }}
                                onClick={() => navigate('/signup')}>Sign up</Box>
                            </StyledText>
                        </Box>
                    </AccountBox>
                </Box>
            </Container>
        </Component>
    )
}

export default LoginForm;
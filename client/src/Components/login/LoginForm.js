import { useState } from 'react';

import { Box, Typography, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// css components
import { Component, Container, AccountBox, InputTextField, StyledButton, Error, StyledText,DisplayText } from './AccountStyles';

import { loginUserThunk } from '../../state/userSlice';

const LoginForm = () => {
    const navigate = useNavigate();
    const user = useSelector(state=>state.user.user);


    const [login, setLogin] = useState({email: '',password: ''});
    const [showPassword, setShowPassword] = useState(false);
    const [error, showError] = useState('');
    const dispatch = useDispatch();

    const onValueChange = (e) => {
        showError('');
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    const onLoginButtonClick =  () => {
        dispatch(loginUserThunk(login));
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
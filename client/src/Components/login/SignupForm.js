import React, { useState } from 'react';

import { Box, Typography, InputAdornment, IconButton  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// css components
import { Component, Container, AccountBox, DisplayText, InputTextField, TncText, StyledButton, Error, StyledText } from './AccountStyles';

import { signupUser } from '../../services/api';


const signupInitialValues = {
    email: '',
    username: '',
    password: '',
};

const SignupForm = () => {

    const [signup, setSignup] = useState(signupInitialValues);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onInputChange = (e) => {
        setError('');
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onSignupButtonClick = async () => {
        let response = await signupUser(signup);
        console.log(response);
        if (response.status === 201) {

            setSignup(signupInitialValues);
            
            navigate('/login');
            return;
        }
        setError(response.data.message);
    }

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    }

    return (
        <Component>
            <Container>
                <AccountBox>

                    <DisplayText>Sign up </DisplayText>

                    <InputTextField onChange={(e) => onInputChange(e)} name='email' placeholder="Mobile Email" />
                    <InputTextField onChange={(e) => onInputChange(e)} name='username' placeholder="Username" />
                    <InputTextField onChange={(e) => onInputChange(e)} 
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

                    { error && <Error>{error}</Error> }

                    <StyledButton variant="contained" onClick={() => onSignupButtonClick()}>Signup</StyledButton>

                    <TncText>
                        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                    </TncText>
                </AccountBox>
                <AccountBox>
                    <Box style={{ padding: '20px 40px' }}>
                        <StyledText>
                            Have an account? <Box component="span" style={{ color: '#0095f6', cursor: 'pointer' }}
                            onClick={() => navigate('/login')}>Log in</Box>
                        </StyledText>
                    </Box>
                </AccountBox>
                
            </Container>
        </Component>
    )
}

export default SignupForm;
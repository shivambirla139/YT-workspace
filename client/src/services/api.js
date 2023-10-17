import axios from 'axios';

import { API_URL_USER ,API_URL_POST } from '../constants/route';

export const getAllPosts = async (config) => {
    try {
        return await axios.get(`${API_URL_POST}/`,config);
    } catch (error) {
        console.log('Error while calling signup User API ', error);
        return error.response;
    }
}
export const createPost = async (data,config)=>{
    try {
        return await axios.post(`${API_URL_POST}`,data,config);
    } catch (error) {
        console.log('Error while calling signup User API ', error);
        return error.response;
    }
}
export const signupUser = async (data) => {
    try {
        return await axios.post(`${API_URL_USER}/register`, data);
    } catch (error) {
        console.log('Error while calling signup User API ', error);
        return error.response;
    }
}

export const loginUser = async (data) => {
    try {
        return await axios.post(`${API_URL_USER}/login`, data);
    } catch (error) {
        console.log('Error while calling login User API ', error);
        return error.response;
    }
}

export const getUserData = async () => {
    try {
        return await axios.get(`${API_URL_USER}/current`);
    } catch (error) {
        console.log('Error while calling getAllUsers API ', error);
        return error.response;
    }
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../state/userSlice";


const Logout = ()=>{
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    dispatch(logoutUser());

    useEffect(()=>{
        if(user.data == null){
            navigate('/login');
        }
    },[]);

}

export default Logout;
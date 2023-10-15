import {loginUserStart,loginUserSuccess,loginUserFailure,logoutUser} from './userSlice';
import { loginUser } from '../services/api';
export const loginUserThunk = (login) => async (dispatch) => {
    dispatch(loginUserStart);
    try {
        const response = await loginUser(login);
        const { status, data } = response; // Extract status and data properties from the response object
        dispatch(loginUserSuccess({ status, data }));
    }catch(e){
        dispatch(loginUserFailure(e));
        console.log("erroom from loginUserThunk function :",e.message);
    }

}


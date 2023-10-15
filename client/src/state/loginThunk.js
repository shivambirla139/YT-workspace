import {loginUserStart,loginUserSuccess,loginUserFailure} from './userSlice';
import { loginUser } from '../services/api';
export const loginUserThunk = (login) => async (dispatch) => {
    dispatch(loginUserStart);
    try {
        const response = await loginUser(login);
        dispatch(loginUserSuccess(response));
    }catch(e){
        dispatch(loginUserFailure(e));
        console.log("erroom from loginUserThunk function :",e.message);
    }

}
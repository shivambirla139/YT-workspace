import  {startGettingPosts,successGettingPosts,failureGetttingPosts
,startAddingPost ,successAddingPost,failureAddingPost } from "./postSlice";
import {createPost,getAllPosts} from "../services/api";


export const getpostsThunk = (config) => async (dispatch) => {
    dispatch(startGettingPosts());
    try {
        const response = await getAllPosts(config);
        const { status, data } = response; // Extract status and data properties from the response object
        console.log(response);
        if(status===200) dispatch(successGettingPosts(data));
        else dispatch(failureGetttingPosts(data));
    }catch(e){
        dispatch(failureGetttingPosts(e));
        console.log("erroom from loginUserThunk function :",e.message);
    }
}

export const createPostThunk = (body,config) => async (dispatch) =>{
    dispatch(startAddingPost);
    try {
        const response = await createPost(body,config);
        const {status , data } = response ;
        console.log(response);
        if(status === 200) dispatch(successAddingPost(data));
        else dispatch(failureAddingPost(data));
    }catch (e){
        dispatch(failureAddingPost(e));
        console.log("erroom from addPostThunk function :",e.message);

    }

}
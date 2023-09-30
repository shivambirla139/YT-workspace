import { createAsyncThunk,createSlice, isPending } from "@reduxjs/toolkit";
import { loginUser } from "../services/api";

export const loginUserThunk = createAsyncThunk('loginUserThunk',async ({email,password},{rejectWithValue})=>{
   try {
    const response = await loginUser({email,password});
    return response;
   }catch (e){
    return rejectWithValue(e);
   }
      
 
});
export const userSlice = createSlice({
  name: "auth",
  initialState:{
    loading : false,
    error : null, 
    user:null,
    accessToken:null,
    
  },
  reducers: {
  },
  extraReducers : {
    [loginUserThunk.pending] : (state,action) => {
      state.loading = true;
    },
    [loginUserThunk.fulfilled] : (state,action) => { 
      state.loading = false;
      console.log(action.payload);
      if(action.payload.status===200){
        state.error = null;
        state.user = action.payload.data.user;
        state.accessToken = action.payload.data.accessToken;
      }else{
        state.error = action.payload.data;
        state.user = null;
        state.accessToken = null;
      }
    },
    [loginUserThunk.rejected] : (state,action) => {
      state.loading = false; 
      state.error = action.payload;
    }
  }
});

export const {} =
  userSlice.actions;
export default userSlice.reducer;
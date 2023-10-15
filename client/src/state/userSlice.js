import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "auth",
  initialState:{
    loading : false,
    error : null, 
    data:null
  },
  reducers: {
    loginUserStart : (state)=>{
      state.laoding = true;
    },
    loginUserSuccess : (state,action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loginUserFailure : (state,action)=>{
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state,action)=>{
      state.loading = false;
      state.error = null;
      state.data = null;
    }
  }
});

export const {loginUserStart,loginUserSuccess,loginUserFailure,logoutUser} = userSlice.actions;
export default userSlice.reducer;
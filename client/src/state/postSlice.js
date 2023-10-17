import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState : {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    startGettingPosts : (state)=>{
        state.loading = true;
        state.error = null;
    },
    successGettingPosts : (state,action)=>{
        state.loading = false;
        state.error = null;
        state.posts = action.payload;
    },
    failureGettingPosts : (state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    startAddingPost: (state)=>{
      state.loading = true;
      state.error = null;
    },
    successAddingPost : (state,action) =>{
      state.loading = false;
      state.post.unshift(action.payload);
      state.error = null;
    },
    failureAddingPost : (state,action) =>{
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const { startGettingPosts,successGettingPosts,failureGetttingPosts,startAddingPost,successAddingPost,failureAddingPost } = postSlice.actions;

export default postSlice.reducer;

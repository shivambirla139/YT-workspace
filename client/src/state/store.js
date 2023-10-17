import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import thunk from 'redux-thunk'
import postReducer from "./postSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    post : postReducer,
  },
  middleware: [thunk],
});
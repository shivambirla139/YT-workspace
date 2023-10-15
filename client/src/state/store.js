import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import thunk from 'redux-thunk'
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
});
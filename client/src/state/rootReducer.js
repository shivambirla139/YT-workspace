import  userReducer from './userSlice.js';
import {combineReducers} from 'redux';
  // Use ES6 object literal shorthand syntax to define the object shape
  const rootReducer = combineReducers({
    user : userReducer,
  });

  export default rootReducer;
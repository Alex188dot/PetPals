// This file is for all the reducers in the application
import { combineReducers } from "redux";
import authReducer from "./AuthReducer.js";
import postReducer from "./PostReducer";

export const reducers = combineReducers({ authReducer, postReducer });

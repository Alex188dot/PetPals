// This file is for all the reducers in the application
import { combineReducers } from "redux";
import authReducer from "./AuthReducer.js";

export const reducers = combineReducers({ authReducer });

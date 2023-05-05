import { combineReducers } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks";
import { authReducer } from "./auth";
import {themeReducer} from './theme'

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    auth: authReducer,
    theme: themeReducer
})
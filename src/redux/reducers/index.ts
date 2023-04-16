import { combineReducers } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks";

export const rootReducer = combineReducers({
    tasks: tasksReducer
})
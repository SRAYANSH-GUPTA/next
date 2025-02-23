import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";
import todoReducer from "./todoSlice";
export const store = configureStore({
    reducer:{
        userdata:reducer,
        todos:todoReducer
    }
}) 
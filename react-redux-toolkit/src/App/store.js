import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./Features/Counter/CounterSlice";
import postReducer from "./Features/Posts/postSlice";
// import counterReducer from "./Features/Counter/CounterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts:postReducer
    }
})
export default store;
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threadsSlice";
import userReducer from "./userSlice";
import { loadingBarMiddleware } from "react-redux-loading-bar";

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loadingBarMiddleware()),
});

export default store;

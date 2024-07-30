import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threadsSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    user: userReducer,
  },
});

export default store;

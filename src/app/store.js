import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../redux/reducer/postsSlice";
import { authenticationReducer } from "../redux/reducer/authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    posts: postsReducer,
  },
});

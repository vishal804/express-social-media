import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "../redux/reducer/authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});

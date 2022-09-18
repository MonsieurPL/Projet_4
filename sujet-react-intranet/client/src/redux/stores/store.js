import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/Userreducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

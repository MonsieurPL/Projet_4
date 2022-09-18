import { createSlice } from "@reduxjs/toolkit";

let stringUser = sessionStorage.getItem("user");
let user = JSON.parse(stringUser);
let initialState = user
  ? {
      value: user,
    }
  : {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userInfo } = userSlice.actions;

export default userSlice.reducer;

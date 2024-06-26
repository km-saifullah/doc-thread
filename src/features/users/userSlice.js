import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const userSlice = createSlice({
  name: "signInUserData",
  initialState,
  reducers: {
    user: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { user } = userSlice.actions;

export default userSlice.reducer;

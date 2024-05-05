import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.removeItem("user") ,
};

export const loginSlice = createSlice({
  name: "loginUserData",
  initialState,
  reducers: {
    loginInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loginInfo } = loginSlice.actions;

export default loginSlice.reducer;

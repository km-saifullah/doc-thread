import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user: (state) => {},
  },
});

export const { user } = userSlice.actions;

export default userSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import loginReducer from "../features/loginInfo/loginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loginInfo: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

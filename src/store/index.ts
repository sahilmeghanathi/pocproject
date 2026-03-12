import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/menuSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    auth: authReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

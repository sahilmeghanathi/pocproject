import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LoginPayload, User } from "../../interface/User.Interface";
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from "../../utils/useLocalStorage";
import { AUTH_KEY } from "../../utils/constant";

const storedUser = getStorageItem<User>(AUTH_KEY);

const initialState: AuthState = {
  user: storedUser,
  isAuthenticated: !!storedUser,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      const { email } = action.payload;

      const user: User = { email };
      state.user = user;
      state.isAuthenticated = true;
      state.error = null;
      setStorageItem(AUTH_KEY, user);
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      removeStorageItem(AUTH_KEY);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

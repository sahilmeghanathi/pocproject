import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getUserFromStorage,
  removeUserFromStorage,
  saveUserToStorage,
} from "../../utils/authStorage";
import { AuthState, LoginPayload, User } from "../../interface/User.Interface";

const storedUser = getUserFromStorage();

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

      saveUserToStorage(user);
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;

      removeUserFromStorage();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

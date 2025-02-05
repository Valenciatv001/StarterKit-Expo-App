import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  isLoggedIn: boolean;
  username: string | null;
  error: string | null;
}

const initialState: LoginState = {
  isLoggedIn: false,
  username: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.username = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoggedIn = false;
      state.username = null;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = loginSlice.actions;

export default loginSlice;

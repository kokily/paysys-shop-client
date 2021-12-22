import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { loginAPI, registerAPI, checkAPI, logoutAPI } from '../api/auth';

export interface AuthState {
  user: MeType | null;
  loginLoading: boolean;
  loginError: SerializedError | null;
  registerLoading: boolean;
  registerError: SerializedError | null;
  checkLoading: boolean;
  checkError: SerializedError | null;
  logoutLoading: boolean;
  logoutError: SerializedError | null;
}

const initialState: AuthState = {
  user: null,
  loginLoading: false,
  loginError: null,
  registerLoading: false,
  registerError: null,
  checkLoading: false,
  checkError: null,
  logoutLoading: false,
  logoutError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [loginAPI.pending.type]: (state) => {
      state.loginLoading = true;
      state.loginError = null;
    },
    [loginAPI.fulfilled.type]: (state, action: PayloadAction<MeType>) => {
      state.loginLoading = false;
      state.user = action.payload;
    },
    [loginAPI.rejected.type]: (state, action: ReturnType<typeof loginAPI.rejected>) => {
      state.loginLoading = false;
      state.loginError = action.error;
    },
    [registerAPI.pending.type]: (state) => {
      state.registerLoading = true;
      state.registerError = null;
    },
    [registerAPI.fulfilled.type]: (state) => {
      state.registerLoading = false;
    },
    [registerAPI.rejected.type]: (
      state,
      action: ReturnType<typeof registerAPI.rejected>
    ) => {
      state.registerLoading = false;
      state.registerError = action.error;
    },
    [checkAPI.pending.type]: (state) => {
      state.checkLoading = true;
      state.checkError = null;
    },
    [checkAPI.fulfilled.type]: (state, action: PayloadAction<MeType>) => {
      state.checkLoading = false;
      state.user = action.payload;
    },
    [checkAPI.rejected.type]: (state, action: ReturnType<typeof checkAPI.rejected>) => {
      state.checkLoading = false;
      state.checkError = action.error;
    },
    [logoutAPI.pending.type]: (state) => {
      state.logoutLoading = true;
      state.logoutError = null;
    },
    [logoutAPI.fulfilled.type]: (state) => {
      state.logoutLoading = false;
      state.user = null;
    },
    [logoutAPI.rejected.type]: (state, action: ReturnType<typeof logoutAPI.rejected>) => {
      state.logoutLoading = false;
      state.logoutError = action.error;
    },
  },
});

export default authSlice.reducer;

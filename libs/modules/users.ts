import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import _concat from 'lodash/concat';
import {
  listUsersAPI,
  readUserAPI,
  removeUserAPI,
  setAdminAPI,
  setEmployeeAPI,
} from '../api/users';

export interface UsersState {
  users: UserType[];
  user: UserType | null;
  hasMoreUsers: boolean;
  listUsersLoading: boolean;
  listUsersError: SerializedError | null;
  readUserLoading: boolean;
  readUserError: SerializedError | null;
  removeUserLoading: boolean;
  removeUserError: SerializedError | null;
  setAdminLoading: boolean;
  setAdminError: SerializedError | null;
  setEmployeeLoading: boolean;
  setEmployeeError: SerializedError | null;
}

const initialState: UsersState = {
  users: [],
  user: null,
  hasMoreUsers: true,
  listUsersLoading: false,
  listUsersError: null,
  readUserLoading: false,
  readUserError: null,
  removeUserLoading: false,
  removeUserError: null,
  setAdminLoading: false,
  setAdminError: null,
  setEmployeeLoading: false,
  setEmployeeError: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = [];
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [listUsersAPI.pending.type]: (state) => {
      state.listUsersLoading = true;
      state.listUsersError = null;
    },
    [listUsersAPI.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
      state.listUsersLoading = false;
      state.users = _concat(state.users, action.payload);
      state.hasMoreUsers = action.payload.length === 20;
    },
    [listUsersAPI.rejected.type]: (
      state,
      action: ReturnType<typeof listUsersAPI.rejected>
    ) => {
      state.listUsersLoading = false;
      state.listUsersError = action.error;
    },
    [readUserAPI.pending.type]: (state) => {
      state.readUserLoading = true;
      state.readUserError = null;
    },
    [readUserAPI.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
      state.readUserLoading = false;
      state.user = action.payload;
    },
    [readUserAPI.rejected.type]: (
      state,
      action: ReturnType<typeof readUserAPI.rejected>
    ) => {
      state.readUserLoading = false;
      state.readUserError = action.error;
    },
    [removeUserAPI.pending.type]: (state) => {
      state.removeUserLoading = true;
      state.removeUserError = null;
    },
    [removeUserAPI.fulfilled.type]: (state) => {
      state.removeUserLoading = false;
    },
    [removeUserAPI.rejected.type]: (
      state,
      action: ReturnType<typeof removeUserAPI.rejected>
    ) => {
      state.removeUserLoading = false;
      state.removeUserError = action.error;
    },
    [setAdminAPI.pending.type]: (state) => {
      state.setAdminLoading = true;
      state.setAdminError = null;
    },
    [setAdminAPI.fulfilled.type]: (state) => {
      state.setAdminLoading = false;
    },
    [setAdminAPI.rejected.type]: (
      state,
      action: ReturnType<typeof setAdminAPI.rejected>
    ) => {
      state.setAdminLoading = false;
      state.setAdminError = action.error;
    },
    [setEmployeeAPI.pending.type]: (state) => {
      state.setEmployeeLoading = true;
      state.setEmployeeError = null;
    },
    [setEmployeeAPI.fulfilled.type]: (state) => {
      state.setEmployeeLoading = false;
    },
    [setEmployeeAPI.rejected.type]: (
      state,
      action: ReturnType<typeof setEmployeeAPI.rejected>
    ) => {
      state.setEmployeeLoading = false;
      state.setEmployeeError = action.error;
    },
  },
});

export const { clearUsers, clearUser } = usersSlice.actions;

export default usersSlice.reducer;

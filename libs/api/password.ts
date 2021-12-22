import { createAsyncThunk } from '@reduxjs/toolkit';
import client from './client';

export interface PasswordPayload {
  password: string;
}

// Change Password Thunk
export const changePasswordAPI = createAsyncThunk(
  'password/changePassword',
  async (payload: PasswordPayload, { rejectWithValue }) => {
    try {
      const response = await client.patch('/users/password', payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

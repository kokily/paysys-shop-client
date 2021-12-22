import { createAsyncThunk } from '@reduxjs/toolkit';
import client from './client';

// ChangePassword Thunk
export const changePasswordAPI = createAsyncThunk(
  'password/changePassword',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.patch('/password', payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

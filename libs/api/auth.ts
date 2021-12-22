import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import client from './client';

export interface AuthPayload {
  username: string;
  password: string;
}

// Login Thunk
export const loginAPI = createAsyncThunk(
  'auth/login',
  async (payload: AuthPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/auth/login', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// Register Thunk
export const registerAPI = createAsyncThunk(
  'auth/register',
  async (payload: AuthPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/auth/register', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// Check Thunk
export const checkAPI = createAsyncThunk('auth/check', async (_, { rejectWithValue }) => {
  try {
    const response = await client.get('/auth/check');
    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

// Logout Thunk
export const logoutAPI = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.post('/auth/logout');
      return response.data;
    } catch (err: any) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

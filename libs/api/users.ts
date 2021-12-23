import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import { toast } from 'react-toastify';
import client from './client';

export interface ListUsersQuery {
  username?: string;
  cursor?: string;
}

export interface IdPayload {
  id: string;
}

// List Users Thunk
export const listUsersAPI = createAsyncThunk(
  'users/listUsers',
  async (query: ListUsersQuery, { rejectWithValue }) => {
    try {
      const queryString = qs.stringify(query);
      const response = await client.get(`/users?${queryString}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Read User Thunk
export const readUserAPI = createAsyncThunk(
  'users/readUser',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.get(`/users/${payload}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove User Thunk
export const removeUserAPI = createAsyncThunk(
  'users/removeUser',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.delete(`/users/${payload}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Set Admin Thunk
export const setAdminAPI = createAsyncThunk(
  'users/setAdmin',
  async (payload: IdPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/users/admin', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Set Employee Thunk
export const setEmployeeAPI = createAsyncThunk(
  'users/setEmployee',
  async (payload: IdPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/users/employee', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

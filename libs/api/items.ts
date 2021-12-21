import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import client from './client';

export interface ListMenuQuery {
  name?: string;
  divide?: string;
  native?: string;
  cursor?: string;
}

// List Menu Thunk
export const listMenuAPI = createAsyncThunk(
  'menu/listMenu',
  async (payload: ListMenuQuery, { rejectWithValue }) => {
    const queryString = qs.stringify(payload);

    try {
      const response = await client.get(`/items?${queryString}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Read Menu Thunk
export const readMenuAPI = createAsyncThunk(
  'menu/readMenu',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.get(`/items/${payload}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

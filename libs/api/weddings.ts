import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import { toast } from 'react-toastify';
import client from './client';

export interface ListWeddingsQuery {
  date?: string;
  cursor?: string;
}

// List Weddings Thunk
export const listWeddingsAPI = createAsyncThunk(
  'weddings/listWeddings',
  async (query: ListWeddingsQuery, { rejectWithValue }) => {
    try {
      const queryString = qs.stringify(query);
      const response = await client.get(`/weddings?${queryString}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Read Wedding Thunk
export const readWeddingAPI = createAsyncThunk(
  'weddings/readWedding',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.get(`/weddings/${payload}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

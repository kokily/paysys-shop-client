import { createAsyncThunk } from '@reduxjs/toolkit';
import client from './client';

export interface AddReservePayload {
  bill_id: string;
  reserve: number;
}

// Add Reserve Thunk
export const addReserveAPI = createAsyncThunk(
  'reserve/addReserve',
  async (payload: AddReservePayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/reserve', payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove Reserve Thunk
export const removeReserveAPI = createAsyncThunk(
  'reserve/removeReserve',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.delete(`/reserve/${payload}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

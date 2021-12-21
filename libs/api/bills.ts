import { createAsyncThunk } from '@reduxjs/toolkit';
import client from './client';

export interface AddBillPayload {
  title: string;
  hall: string;
  etc: string;
}

export interface ListBillsQuery {
  user_id?: string;
  title?: string;
  hall?: string;
  cursor?: string;
}

// Add Bill Thunk
export const addBillAPI = createAsyncThunk(
  'bills/addBill',
  async (payload: AddBillPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/bills', payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

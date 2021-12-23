import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import client from './client';

export interface AddSignPayload {
  weddingId: string;
  sex: string;
  image: string;
}

export interface RemoveSignPayload {
  id: string;
}

// Add Sign Thunk
export const addSignAPI = createAsyncThunk(
  'sign/addSign',
  async (payload: AddSignPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/sign', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove Sign Thunk
export const removeSignAPI = createAsyncThunk(
  'sign/removeSign',
  async (payload: RemoveSignPayload, { rejectWithValue }) => {
    try {
      const response = await client.patch('/sign', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

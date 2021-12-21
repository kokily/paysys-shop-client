import { createAsyncThunk } from '@reduxjs/toolkit';
import client from './client';

export interface AddCartPayload {
  item_id: string;
  count: number;
  price: number;
}

// Add Cart Thunk
export const addCartAPI = createAsyncThunk(
  'cart/addCart',
  async (payload: AddCartPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/cart', payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

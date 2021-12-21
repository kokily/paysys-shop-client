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

// View Cart Thunk
export const viewCartAPI = createAsyncThunk(
  'cart/viewCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.get('/cart');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove Cart Thunk
export const removeCartAPI = createAsyncThunk(
  'cart/removeCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.delete('/cart');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove One Cart Thunk
export const removeOneCartAPI = createAsyncThunk(
  'cart/removeOneCart',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.patch(`/cart/${payload}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import qs from 'qs';
import client from './client';
import { ListMenuQuery } from './menu';

export interface AddItemPayload {
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
}

export interface ListItemsQuery extends ListMenuQuery {}

export interface UpdateItemPayload extends AddItemPayload {
  id: string;
}

// List Items Thunk
export const listItemsAPI = createAsyncThunk(
  'items/listItems',
  async (payload: ListItemsQuery, { rejectWithValue }) => {
    try {
      const queryString = qs.stringify(payload);
      const response = await client.get(`/items?${queryString}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Read Item Thunk
export const readItemAPI = createAsyncThunk(
  'items/readItem',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.get(`/items/${payload}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Add Item Thunk
export const addItemAPI = createAsyncThunk(
  'items/addItem',
  async (payload: AddItemPayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/items', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove Item Thunk
export const removeItemAPI = createAsyncThunk(
  'items/removeItem',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.delete(`/items/${payload}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Update Item Thunk
export const updateItemAPI = createAsyncThunk(
  'items/updateItem',
  async (payload: UpdateItemPayload, { rejectWithValue }) => {
    try {
      const { id, name, divide, native, unit, price } = payload;
      const response = await client.put(`/items/${id}`, {
        name,
        divide,
        native,
        unit,
        price,
      });

      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

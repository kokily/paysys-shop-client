import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
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

// List Bills Thunk
export const listBillsAPI = createAsyncThunk(
  'bills/listBills',
  async (query: ListBillsQuery, { rejectWithValue }) => {
    try {
      const queryString = qs.stringify(query);
      const response = await client.get(`/bills?${queryString}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Read bill Thunk
export const readBillAPI = createAsyncThunk(
  'bills/readBill',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.get(`/bills/${payload}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Restore Bill Thunk
export const restoreBillAPI = createAsyncThunk(
  'bills/restoreBill',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.patch(`/bills/${payload}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove Bill Thunk
export const removeBillAPI = createAsyncThunk(
  'bills/removeBill',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.delete(`/bills/${payload}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AddExpensePayload, UpdateExpensePayload } from '../types';
import client from './client';

// Add Expense Thunk
export const addExpenseAPI = createAsyncThunk(
  'expense/addExpense',
  async (payload: AddExpensePayload, { rejectWithValue }) => {
    try {
      const response = await client.post('/expense', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Update Expense Thunk
export const updateExpenseAPI = createAsyncThunk(
  'expense/updateExpense',
  async (payload: UpdateExpensePayload, { rejectWithValue }) => {
    try {
      const response = await client.put('/expense', payload);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove Expense Thunk
export const removeExpenseAPI = createAsyncThunk(
  'expense/removeExpense',
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await client.delete(`/expense/${payload}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

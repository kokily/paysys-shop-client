import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import { toast } from 'react-toastify';
import client from './client';

export interface TopTitleQuery {
  start_date?: Date;
  end_date?: Date;
}

// Top Title Thunk
export const topTitleAPI = createAsyncThunk(
  'result/topTitle',
  async (query: TopTitleQuery, { rejectWithValue }) => {
    try {
      const queryString = qs.stringify(query);
      const response = await client.get(`/result/toptitle?${queryString}`);
      return response.data;
    } catch (err: any) {
      toast.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

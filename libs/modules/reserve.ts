import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addReserveAPI, removeReserveAPI } from '../api/reserve';

export type ReserveState = {
  addReserveLoading: boolean;
  addReserveError: SerializedError | null;
  removeReserveLoading: boolean;
  removeReserveError: SerializedError | null;
};

const initialState: ReserveState = {
  addReserveLoading: false,
  addReserveError: null,
  removeReserveLoading: false,
  removeReserveError: null,
};

const reserveSlice = createSlice({
  name: 'reserve',
  initialState,
  reducers: {},
  extraReducers: {
    [addReserveAPI.pending.type]: (state) => {
      state.addReserveLoading = true;
      state.addReserveError = null;
    },
    [addReserveAPI.fulfilled.type]: (state) => {
      state.addReserveLoading = false;
    },
    [addReserveAPI.rejected.type]: (
      state,
      action: ReturnType<typeof addReserveAPI.rejected>
    ) => {
      state.addReserveLoading = false;
      state.addReserveError = action.error;
    },
    [removeReserveAPI.pending.type]: (state) => {
      state.removeReserveLoading = true;
      state.removeReserveError = null;
    },
    [removeReserveAPI.fulfilled.type]: (state) => {
      state.removeReserveLoading = false;
    },
    [removeReserveAPI.rejected.type]: (
      state,
      action: ReturnType<typeof removeReserveAPI.rejected>
    ) => {
      state.removeReserveLoading = false;
      state.removeReserveError = action.error;
    },
  },
});

export default reserveSlice.reducer;

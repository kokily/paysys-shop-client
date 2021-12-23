import type { SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addExpenseAPI, removeExpenseAPI, updateExpenseAPI } from '../api/expense';

export interface ExpenseState {
  addExpenseLoading: boolean;
  addExpenseError: SerializedError | null;
  updateExpenseLoading: boolean;
  updateExpenseError: SerializedError | null;
  removeExpenseLoading: boolean;
  removeExpenseError: SerializedError | null;
}

const initialState: ExpenseState = {
  addExpenseLoading: false,
  addExpenseError: null,
  updateExpenseLoading: false,
  updateExpenseError: null,
  removeExpenseLoading: false,
  removeExpenseError: null,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {},
  extraReducers: {
    [addExpenseAPI.pending.type]: (state) => {
      state.addExpenseLoading = true;
      state.addExpenseError = null;
    },
    [addExpenseAPI.fulfilled.type]: (state) => {
      state.addExpenseLoading = false;
    },
    [addExpenseAPI.rejected.type]: (
      state,
      action: ReturnType<typeof addExpenseAPI.rejected>
    ) => {
      state.addExpenseLoading = false;
      state.addExpenseError = action.error;
    },
    [updateExpenseAPI.pending.type]: (state) => {
      state.updateExpenseLoading = true;
      state.updateExpenseError = null;
    },
    [updateExpenseAPI.fulfilled.type]: (state) => {
      state.updateExpenseLoading = false;
    },
    [updateExpenseAPI.rejected.type]: (
      state,
      action: ReturnType<typeof updateExpenseAPI.rejected>
    ) => {
      state.updateExpenseLoading = false;
      state.updateExpenseError = action.error;
    },
    [removeExpenseAPI.pending.type]: (state) => {
      state.removeExpenseLoading = true;
      state.removeExpenseError = null;
    },
    [removeExpenseAPI.fulfilled.type]: (state) => {
      state.removeExpenseLoading = false;
    },
    [removeExpenseAPI.rejected.type]: (
      state,
      action: ReturnType<typeof removeExpenseAPI.rejected>
    ) => {
      state.removeExpenseLoading = false;
      state.removeExpenseError = action.error;
    },
  },
});

export default expenseSlice.reducer;

import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import _concat from 'lodash/concat';
import {
  addBillAPI,
  listBillsAPI,
  readBillAPI,
  removeBillAPI,
  restoreBillAPI,
} from '../api/bills';

export interface BillsState {
  bills: BillType[];
  bill: BillType | null;
  hasMoreBills: boolean;
  addBillLoading: boolean;
  addBillError: SerializedError | null;
  listBillsLoading: boolean;
  listBillsError: SerializedError | null;
  readBillLoading: boolean;
  readBillError: SerializedError | null;
  restoreBillLoading: boolean;
  restoreBillError: SerializedError | null;
  removeBillLoading: boolean;
  removeBillError: SerializedError | null;
}

const initialState: BillsState = {
  bills: [],
  bill: null,
  hasMoreBills: true,
  addBillLoading: false,
  addBillError: null,
  listBillsLoading: false,
  listBillsError: null,
  readBillLoading: false,
  readBillError: null,
  restoreBillLoading: false,
  restoreBillError: null,
  removeBillLoading: false,
  removeBillError: null,
};

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    clearBills: (state) => {
      state.bills = [];
    },
    clearBill: (state) => {
      state.bill = null;
    },
  },
  extraReducers: {
    [addBillAPI.pending.type]: (state) => {
      state.addBillLoading = true;
      state.addBillError = null;
    },
    [addBillAPI.fulfilled.type]: (state) => {
      state.addBillLoading = false;
    },
    [addBillAPI.rejected.type]: (
      state,
      action: ReturnType<typeof addBillAPI.rejected>
    ) => {
      state.addBillLoading = false;
      state.addBillError = action.error;
    },
    [listBillsAPI.pending.type]: (state) => {
      state.listBillsLoading = true;
      state.listBillsError = null;
    },
    [listBillsAPI.fulfilled.type]: (state, action: PayloadAction<BillType[]>) => {
      state.listBillsLoading = false;
      state.bills = _concat(state.bills, action.payload);
      state.hasMoreBills = action.payload.length === 20;
    },
    [listBillsAPI.rejected.type]: (
      state,
      action: ReturnType<typeof listBillsAPI.rejected>
    ) => {
      state.listBillsLoading = false;
      state.listBillsError = action.error;
    },
    [readBillAPI.pending.type]: (state) => {
      state.readBillLoading = true;
      state.readBillError = null;
    },
    [readBillAPI.fulfilled.type]: (state, action: PayloadAction<BillType>) => {
      state.readBillLoading = false;
      state.bill = action.payload;
    },
    [readBillAPI.rejected.type]: (
      state,
      action: ReturnType<typeof readBillAPI.rejected>
    ) => {
      state.readBillLoading = false;
      state.readBillError = action.error;
    },
    [restoreBillAPI.pending.type]: (state) => {
      state.restoreBillLoading = true;
      state.restoreBillError = null;
    },
    [restoreBillAPI.fulfilled.type]: (state) => {
      state.restoreBillLoading = false;
    },
    [restoreBillAPI.rejected.type]: (
      state,
      action: ReturnType<typeof restoreBillAPI.rejected>
    ) => {
      state.restoreBillLoading = false;
      state.restoreBillError = action.error;
    },
    [removeBillAPI.pending.type]: (state) => {
      state.removeBillLoading = true;
      state.removeBillError = null;
    },
    [removeBillAPI.fulfilled.type]: (state) => {
      state.removeBillLoading = false;
    },
    [removeBillAPI.rejected.type]: (
      state,
      action: ReturnType<typeof removeBillAPI.rejected>
    ) => {
      state.removeBillLoading = false;
      state.removeBillError = action.error;
    },
  },
});

export const { clearBills, clearBill } = billsSlice.actions;

export default billsSlice.reducer;

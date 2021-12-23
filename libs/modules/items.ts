import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import _concat from 'lodash/concat';
import {
  addItemAPI,
  listItemsAPI,
  readItemAPI,
  removeItemAPI,
  updateItemAPI,
} from '../api/items';

export interface ItemsState {
  items: ItemType[];
  item: ItemType | null;
  hasMoreItems: boolean;
  listItemsLoading: boolean;
  listItemsError: SerializedError | null;
  readItemLoading: boolean;
  readItemError: SerializedError | null;
  addItemLoading: boolean;
  addItemError: SerializedError | null;
  removeItemLoading: boolean;
  removeItemError: SerializedError | null;
  updateItemLoading: boolean;
  updateItemError: SerializedError | null;
}

const initialState: ItemsState = {
  items: [],
  item: null,
  hasMoreItems: true,
  listItemsLoading: false,
  listItemsError: null,
  readItemLoading: false,
  readItemError: null,
  addItemLoading: false,
  addItemError: null,
  removeItemLoading: false,
  removeItemError: null,
  updateItemLoading: false,
  updateItemError: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
    clearItem: (state) => {
      state.item = null;
    },
  },
  extraReducers: {
    [listItemsAPI.pending.type]: (state) => {
      state.listItemsLoading = true;
      state.listItemsError = null;
    },
    [listItemsAPI.fulfilled.type]: (state, action: PayloadAction<ItemType[]>) => {
      state.listItemsLoading = false;
      state.items = _concat(state.items, action.payload);
      state.hasMoreItems = action.payload.length === 30;
    },
    [listItemsAPI.rejected.type]: (
      state,
      action: ReturnType<typeof listItemsAPI.rejected>
    ) => {
      state.listItemsLoading = false;
      state.listItemsError = action.error;
    },
    [readItemAPI.pending.type]: (state) => {
      state.readItemLoading = true;
      state.readItemError = null;
    },
    [readItemAPI.fulfilled.type]: (state, action: PayloadAction<ItemType>) => {
      state.readItemLoading = false;
      state.item = action.payload;
    },
    [readItemAPI.rejected.type]: (
      state,
      action: ReturnType<typeof readItemAPI.rejected>
    ) => {
      state.readItemLoading = false;
      state.readItemError = action.error;
    },
    [addItemAPI.pending.type]: (state) => {
      state.addItemLoading = true;
      state.addItemError = null;
    },
    [addItemAPI.fulfilled.type]: (state) => {
      state.addItemLoading = false;
    },
    [addItemAPI.rejected.type]: (
      state,
      action: ReturnType<typeof addItemAPI.rejected>
    ) => {
      state.addItemLoading = false;
      state.addItemError = action.error;
    },
    [removeItemAPI.pending.type]: (state) => {
      state.removeItemLoading = true;
      state.removeItemError = null;
    },
    [removeItemAPI.fulfilled.type]: (state) => {
      state.removeItemLoading = false;
    },
    [removeItemAPI.rejected.type]: (
      state,
      action: ReturnType<typeof removeItemAPI.rejected>
    ) => {
      state.removeItemLoading = false;
      state.removeItemError = action.error;
    },
    [updateItemAPI.pending.type]: (state) => {
      state.updateItemLoading = true;
      state.updateItemError = null;
    },
    [updateItemAPI.fulfilled.type]: (state) => {
      state.updateItemLoading = false;
    },
    [updateItemAPI.rejected.type]: (
      state,
      action: ReturnType<typeof updateItemAPI.rejected>
    ) => {
      state.updateItemLoading = false;
      state.updateItemError = action.error;
    },
  },
});

export const { clearItems, clearItem } = itemsSlice.actions;

export default itemsSlice.reducer;

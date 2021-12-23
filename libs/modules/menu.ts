import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { listMenuAPI, readMenuAPI } from '../api/menu';

export interface MenuState {
  menus: ItemType[];
  menu: ItemType | null;
  listMenuLoading: boolean;
  listMenuError: SerializedError | null;
  readMenuLoading: boolean;
  readMenuError: SerializedError | null;
}

const initialState: MenuState = {
  menus: [],
  menu: null,
  listMenuLoading: false,
  listMenuError: null,
  readMenuLoading: false,
  readMenuError: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: {
    [listMenuAPI.pending.type]: (state) => {
      state.listMenuLoading = true;
      state.listMenuError = null;
    },
    [listMenuAPI.fulfilled.type]: (state, action: PayloadAction<ItemType[]>) => {
      state.listMenuLoading = false;
      state.menus = action.payload;
    },
    [listMenuAPI.rejected.type]: (
      state,
      action: ReturnType<typeof listMenuAPI.rejected>
    ) => {
      state.listMenuLoading = false;
      state.listMenuError = action.error;
    },
    [readMenuAPI.pending.type]: (state) => {
      state.readMenuLoading = true;
      state.readMenuError = null;
    },
    [readMenuAPI.fulfilled.type]: (state, action: PayloadAction<ItemType>) => {
      state.readMenuLoading = false;
      state.menu = action.payload;
    },
    [readMenuAPI.rejected.type]: (
      state,
      action: ReturnType<typeof readMenuAPI.rejected>
    ) => {
      state.readMenuLoading = false;
      state.readMenuError = action.error;
    },
  },
});

export default menuSlice.reducer;

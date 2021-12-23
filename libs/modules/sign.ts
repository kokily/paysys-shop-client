import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addSignAPI, removeSignAPI } from '../api/sign';

export interface SignState {
  husband: boolean;
  bride: boolean;
  husbandImage: string;
  brideImage: string;
  currentImg: string;
  addSignLoading: boolean;
  addSignError: SerializedError | null;
  removeSignLoading: boolean;
  removeSignError: SerializedError | null;
}

const initialState: SignState = {
  husband: false,
  bride: false,
  husbandImage: '',
  brideImage: '',
  currentImg: '',
  addSignLoading: false,
  addSignError: null,
  removeSignLoading: false,
  removeSignError: null,
};

const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setCurrentImg: (state, action: PayloadAction<string>) => {
      state.currentImg = action.payload;
    },
    setHusbandImg: (state, action: PayloadAction<string>) => {
      state.husbandImage = action.payload;
      state.currentImg = '';
    },
    setBrideImg: (state, action: PayloadAction<string>) => {
      state.brideImage = action.payload;
      state.currentImg = '';
    },
    visibleHusband: (state, action: PayloadAction<boolean>) => {
      state.husband = action.payload;
    },
    visibleBride: (state, action: PayloadAction<boolean>) => {
      state.bride = action.payload;
    },
  },
  extraReducers: {
    [addSignAPI.pending.type]: (state) => {
      state.addSignLoading = true;
      state.addSignError = null;
    },
    [addSignAPI.fulfilled.type]: (state) => {
      state.addSignLoading = false;
    },
    [addSignAPI.rejected.type]: (
      state,
      action: ReturnType<typeof addSignAPI.rejected>
    ) => {
      state.addSignLoading = false;
      state.addSignError = action.error;
    },
    [removeSignAPI.pending.type]: (state) => {
      state.removeSignLoading = true;
      state.removeSignError = null;
    },
    [removeSignAPI.fulfilled.type]: (state) => {
      state.removeSignLoading = false;
    },
    [removeSignAPI.rejected.type]: (
      state,
      action: ReturnType<typeof removeSignAPI.rejected>
    ) => {
      state.removeSignLoading = false;
      state.removeSignError = action.error;
    },
  },
});

export const { setCurrentImg, setHusbandImg, setBrideImg, visibleHusband, visibleBride } =
  signSlice.actions;

export default signSlice.reducer;

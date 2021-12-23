import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { topTitleAPI } from '../api/result';

export interface ResultState {
  titles: TopTitleType[];
  topTitleLoading: boolean;
  topTitleError: SerializedError | null;
}

const initialState: ResultState = {
  titles: [],
  topTitleLoading: false,
  topTitleError: null,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    clearTopTitle: (state) => {
      state.titles = [];
    },
  },
  extraReducers: {
    [topTitleAPI.pending.type]: (state) => {
      state.topTitleLoading = true;
      state.topTitleError = null;
    },
    [topTitleAPI.fulfilled.type]: (state, action: PayloadAction<TopTitleType[]>) => {
      state.topTitleLoading = false;
      state.titles = action.payload;
    },
    [topTitleAPI.rejected.type]: (
      state,
      action: ReturnType<typeof topTitleAPI.rejected>
    ) => {
      state.topTitleLoading = false;
      state.topTitleError = action.error;
    },
  },
});

export const { clearTopTitle } = resultSlice.actions;

export default resultSlice.reducer;

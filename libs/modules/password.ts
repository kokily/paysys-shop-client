import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { changePasswordAPI } from '../api/password';

export interface PasswordState {
  changePasswordLoading: boolean;
  changePasswordError: SerializedError | null;
}

const initialState: PasswordState = {
  changePasswordLoading: false,
  changePasswordError: null,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {},
  extraReducers: {
    [changePasswordAPI.pending.type]: (state) => {
      state.changePasswordLoading = true;
      state.changePasswordError = null;
    },
    [changePasswordAPI.fulfilled.type]: (state) => {
      state.changePasswordLoading = false;
    },
    [changePasswordAPI.rejected.type]: (
      state,
      action: ReturnType<typeof changePasswordAPI.rejected>
    ) => {
      state.changePasswordLoading = false;
      state.changePasswordError = action.error;
    },
  },
});

export default passwordSlice.reducer;

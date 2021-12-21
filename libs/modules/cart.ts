import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addCartAPI } from '../api/cart';

export interface CartState {
  cart: CartType | null;
  totalAmount: number;
  addCartLoading: boolean;
  addCartError: SerializedError | null;
}

const initialState: CartState = {
  cart: null,
  totalAmount: 0,
  addCartLoading: false,
  addCartError: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: {
    [addCartAPI.pending.type]: (state) => {
      state.addCartLoading = true;
      state.addCartError = null;
    },
    [addCartAPI.fulfilled.type]: (state) => {
      state.addCartLoading = false;
    },
    [addCartAPI.rejected.type]: (
      state,
      action: ReturnType<typeof addCartAPI.rejected>
    ) => {
      state.addCartLoading = false;
      state.addCartError = action.error;
    },
  },
});

export default cartSlice.reducer;

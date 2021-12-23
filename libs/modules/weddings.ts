import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import _concat from 'lodash/concat';
import { listWeddingsAPI, readWeddingAPI } from '../api/weddings';

export interface WeddingsState {
  weddings: WeddingType[];
  wedding: WeddingType | null;
  convention: ConventionType | null;
  company: CompanyType | null;
  event: EventType | null;
  hanbok: HanbokType | null;
  meal: MealType | null;
  present: PresentType | null;
  reserve: ReserveType | null;
  prepayment: PrepaymentType | null;
  hasMoreWeddings: boolean;
  listWeddingsLoading: boolean;
  listWeddingsError: SerializedError | null;
  readWeddingLoading: boolean;
  readWeddingError: SerializedError | null;
}

const initialState: WeddingsState = {
  weddings: [],
  wedding: null,
  convention: null,
  company: null,
  event: null,
  hanbok: null,
  meal: null,
  present: null,
  reserve: null,
  prepayment: null,
  hasMoreWeddings: true,
  listWeddingsLoading: false,
  listWeddingsError: null,
  readWeddingLoading: false,
  readWeddingError: null,
};

const weddingsSlice = createSlice({
  name: 'weddings',
  initialState,
  reducers: {
    clearWeddings: (state) => {
      state.weddings = [];
    },
    clearWedding: (state) => {
      state.wedding = null;
      state.convention = null;
      state.company = null;
      state.event = null;
      state.hanbok = null;
      state.meal = null;
      state.present = null;
      state.reserve = null;
      state.prepayment = null;
    },
  },
  extraReducers: {
    [listWeddingsAPI.pending.type]: (state) => {
      state.listWeddingsLoading = true;
      state.listWeddingsError = null;
    },
    [listWeddingsAPI.fulfilled.type]: (state, action: PayloadAction<WeddingType[]>) => {
      state.listWeddingsLoading = false;
      state.weddings = _concat(state.weddings, action.payload);
      state.hasMoreWeddings = action.payload.length === 20;
    },
    [listWeddingsAPI.rejected.type]: (
      state,
      action: ReturnType<typeof listWeddingsAPI.rejected>
    ) => {
      state.listWeddingsLoading = false;
      state.listWeddingsError = action.error;
    },
    [readWeddingAPI.pending.type]: (state) => {
      state.readWeddingLoading = true;
      state.readWeddingError = null;
    },
    [readWeddingAPI.fulfilled.type]: (state, action: PayloadAction<ReadWeddingType>) => {
      state.readWeddingLoading = false;
      state.wedding = action.payload.wedding;
      state.convention = action.payload.convention;
      state.company = action.payload.company;
      state.event = action.payload.event;
      state.hanbok = action.payload.hanbok;
      state.meal = action.payload.meal;
      state.present = action.payload.present;
      state.reserve = action.payload.reserve;
      state.prepayment = action.payload.prepayment;
    },
    [readWeddingAPI.rejected.type]: (
      state,
      action: ReturnType<typeof readWeddingAPI.rejected>
    ) => {
      state.readWeddingLoading = false;
      state.readWeddingError = action.error;
    },
  },
});

export const { clearWeddings, clearWedding } = weddingsSlice.actions;

export default weddingsSlice.reducer;

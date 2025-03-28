import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryState {
  currentQuery: string;
  queryHistory: string[];
  loading: boolean;
  error: string | null;
  results: any | null;
}

const initialState: QueryState = {
  currentQuery: '',
  queryHistory: [],
  loading: false,
  error: null,
  results: null,
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.queryHistory.unshift(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setResults: (state, action: PayloadAction<any>) => {
      state.results = action.payload;
    },
  },
});

export const {
  setCurrentQuery,
  addToHistory,
  setLoading,
  setError,
  setResults,
} = querySlice.actions;

export default querySlice.reducer;
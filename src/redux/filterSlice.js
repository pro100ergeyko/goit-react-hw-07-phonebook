import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});
export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;

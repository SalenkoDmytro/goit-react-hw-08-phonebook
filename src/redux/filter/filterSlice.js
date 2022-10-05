import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    addFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;
export default filterSlice.reducer;

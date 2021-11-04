import { createSlice } from '@reduxjs/toolkit';

const storeCounter = createSlice({
  name: 'storeCounter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = storeCounter.actions;

export default storeCounter.reducer;

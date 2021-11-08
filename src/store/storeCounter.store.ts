import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '.'

const storeCounter = createSlice({
  name: 'storeCounter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.counter -= action.payload;
    },
  },
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function asyncIncrement(value: number): AppThunk {
  return function (dispatch: AppDispatch) {
    sleep(3000);
    dispatch(increment(value));
  };
}

export function asyncDecrement(value: number): AppThunk {
  return function  (dispatch: AppDispatch) {
    sleep(3000);
    dispatch(decrement(value));
  };
}

export const { increment, decrement } = storeCounter.actions;

export default storeCounter.reducer;

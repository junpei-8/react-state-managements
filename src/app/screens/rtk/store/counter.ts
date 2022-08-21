import { createSlice } from '@reduxjs/toolkit';

export type CounterState = number;

const initialState: CounterState = 0;

export const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
  },
});

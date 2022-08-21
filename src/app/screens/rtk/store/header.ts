import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeaderState = {
  content: JSX.Element | null;
};

const initialState: HeaderState = {
  content: null,
};

export const headerSlice = createSlice({
  name: 'header',

  initialState,

  reducers: {
    attachContent(state, { payload }: PayloadAction<HeaderState['content']>) {
      return {
        ...state,
        content: payload,
      };
    },
    detachContent(state) {
      return {
        ...state,
        content: null,
      };
    },
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeaderState = {
  subtitle: string;
  content: JSX.Element | null;
};

const initialState: HeaderState = {
  subtitle: '',
  content: null,
};

export const headerSlice = createSlice({
  name: 'header',

  initialState,

  reducers: {
    setSubtitle(state, { payload }: PayloadAction<HeaderState['subtitle']>) {
      return {
        ...state,
        subtitle: payload,
      };
    },

    unsetSubtitle(state) {
      return {
        ...state,
        subtitle: '',
      };
    },

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

export const { actions: headerAction, reducer: headerReducer } = headerSlice;

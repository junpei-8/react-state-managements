import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { headerSlice } from './header';

export type State = ReturnType<typeof store['getState']>;
export type Dispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    header: headerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 特殊な例として FunctionElement を状態として保持しているため、その部分のシリアライズを除外する
        ignoredActions: ['header/attachContent'],
        ignoredPaths: ['header.content'],
      },
    }),
});

store.dispatch;

export default store;

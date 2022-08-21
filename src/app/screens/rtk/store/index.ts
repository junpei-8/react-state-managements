import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { headerReducer } from './header';

export * from './counter';
export * from './header';

export type State = ReturnType<typeof store['getState']>;
export type Dispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
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

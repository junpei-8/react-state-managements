import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { headerReducer } from './header';

export type State = NonNullable<Parameters<typeof reducer>[0]>;

export const reducer = combineReducers({
  counter: counterReducer,
  header: headerReducer,
});

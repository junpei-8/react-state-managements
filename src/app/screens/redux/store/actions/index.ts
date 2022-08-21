import { Dispatch as _Dispatch } from 'redux';
import { CounterAction } from './counter';
import { HeaderAction } from './header';

export type Action = CounterAction | HeaderAction;
export type Dispatch = _Dispatch<Action>;

import { INCREMENT_COUNT, DECREMENT_COUNT, CounterAction, CounterState } from '../actions/counter';

const initialState: CounterState = 0;

export function counterReducer(state = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;

    case DECREMENT_COUNT:
      return state - 1;

    default:
      return state;
  }
}

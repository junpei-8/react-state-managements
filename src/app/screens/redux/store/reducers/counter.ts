import { INCREMENT, DECREMENT, CounterAction, CounterState } from '../actions/counter';

const initialState: CounterState = 0;

export function counterReducer(state = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}

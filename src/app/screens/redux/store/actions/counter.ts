import { ActionFactory } from './actions';

const KEY = 'count';
export const INCREMENT = `${KEY}/increment` as const;
export const DECREMENT = `${KEY}/decrement` as const;

export type CounterState = number;

export const counterAction = {
  increment() {
    return { type: INCREMENT };
  },

  decrement() {
    return { type: DECREMENT };
  },
} as const;

export type CounterAction = ActionFactory<typeof counterAction>;

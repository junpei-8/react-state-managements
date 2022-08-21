export const INCREMENT_COUNT = 'INCREMENT_COUNT' as const;
export const DECREMENT_COUNT = 'DECREMENT_COUNT' as const;

export type CounterState = number;

export const incrementCount = () => ({
  type: INCREMENT_COUNT,
});

export const decrementCount = () => ({
  type: DECREMENT_COUNT,
});

export type CounterAction = ReturnType<typeof incrementCount | typeof decrementCount>;

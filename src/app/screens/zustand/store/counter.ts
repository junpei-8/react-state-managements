import create from 'zustand';

interface CounterStore {
  readonly value: number;

  increment(): void;
  decrement(): void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  value: 0,

  increment: () => set(({ value }) => ({ value: value + 1 })),
  decrement: () => set(({ value }) => ({ value: value - 1 })),
}));

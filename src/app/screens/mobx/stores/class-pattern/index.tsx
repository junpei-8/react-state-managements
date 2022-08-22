import { useLocalObservable } from 'mobx-react';
import { createContext, PropsWithChildren, useContext } from 'react';
import { CounterStore } from './counter';
import { HeaderStore } from './header';

interface Store {
  counter: CounterStore;
  header: HeaderStore;
}

export const StoreContext = createContext<Store>(null!);

export function StoreProvider({ children }: PropsWithChildren) {
  const store = {
    counter: useLocalObservable(() => new CounterStore()),
    header: useLocalObservable(() => new HeaderStore()),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export function useStore() {
  return useContext(StoreContext);
}

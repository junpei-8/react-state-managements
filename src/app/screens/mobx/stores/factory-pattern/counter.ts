// * Pattern 2: `observable`関数を使用した定義方法
import { observable } from 'mobx';

export const counterStore = observable(
  {
    count: 0,
  },
  {
    count: observable.ref,
  },
);

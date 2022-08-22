import { observable } from 'mobx';

// * Pattern 1: クラス構文を使用した定義方法
export class CounterStore {
  @observable.ref
  count = 0;
}

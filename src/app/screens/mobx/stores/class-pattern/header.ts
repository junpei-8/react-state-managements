import { getRandomString } from '@/utils';
import { observable, computed, action } from 'mobx';

// * Pattern 1: クラス構文を使用した定義方法
export class HeaderStore {
  @observable
  subtitle: string = '';

  @observable
  content: JSX.Element | null = null;

  @action
  setRandomSubtitle() {
    this.subtitle = getRandomString();
  }

  @computed
  get formattedSubtitle() {
    const subtitle = this.subtitle;
    return subtitle ? `-\u3000${subtitle}` : null;
  }
}

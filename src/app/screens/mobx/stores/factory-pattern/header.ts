import { getRandomString } from '@/utils';
import { observable, computed, action } from 'mobx';

// * Pattern 2: `observable`関数を使用した書き方
export const headerStore = observable(
  {
    subtitle: '',
    content: null as JSX.Element | null,

    setRandomSubtitle() {
      this.subtitle = getRandomString();
    },

    get formattedSubtitle() {
      const subtitle = this.subtitle;
      return subtitle ? `-\u3000${subtitle}` : null;
    },
  },
  {
    subtitle: observable,
    content: observable.ref,
    setRandomSubtitle: action,
    formattedSubtitle: computed,
  },
);

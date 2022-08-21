import { atom, selector } from 'recoil';

export type HeaderState = {
  subtitle: string;
  content: JSX.Element | null;
};

export const headerState = atom<HeaderState>({
  key: 'Counter',
  default: {
    subtitle: '',
    content: null,
  },
});

export const headerSubtitleState = selector({
  key: 'CounterSubtitle',

  get: ({ get }) => {
    const { subtitle } = get(headerState);

    if (subtitle) {
      return `-\u3000${subtitle}`;
    }

    return null;
  },
});

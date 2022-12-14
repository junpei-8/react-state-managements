import { atom, selector } from 'recoil';

export type HeaderState = {
  subtitle: string;
  content: JSX.Element | null;
};

export const headerState = atom<HeaderState>({
  key: 'Header',
  default: {
    subtitle: '',
    content: null,
  },
});

export const headerFormattedSubtitle = selector({
  key: 'HeaderFormattedSubtitle',

  get: ({ get }) => {
    const { subtitle } = get(headerState);

    return subtitle ? `-\u3000${subtitle}` : null;
  },
});

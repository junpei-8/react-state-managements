import create from 'zustand';

type HeaderStore = Readonly<{
  subtitle: string;
  setSubtitle(subtitle: string): void;
  unsetSubtitle(): void;

  content: JSX.Element | null;
  attachContent(content: JSX.Element): void;
  detachContent(): void;

  computed: {
    formattedSubtitle: string;
  };
}>;

export const useHeaderStore = create<HeaderStore>((set, get) => ({
  subtitle: '',
  setSubtitle: (subtitle: string) => set(() => ({ subtitle: subtitle })),
  unsetSubtitle: () => set(() => ({ subtitle: '' })),

  content: null,
  attachContent: (content: JSX.Element) => set(() => ({ content })),
  detachContent: () => set(() => ({ content: null })),

  computed: {
    get formattedSubtitle() {
      return get().subtitle ? `-\u3000${get().subtitle}` : '';
    },
  },
}));

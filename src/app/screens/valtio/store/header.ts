import create from 'zustand';

type HeaderStore = Readonly<{
  subtitle: string;
  setSubtitle(subtitle: string): void;
  unsetSubtitle(): void;

  content: JSX.Element | null;
  attachContent(content: JSX.Element): void;
  detachContent(): void;
  formattedSubtitle: string;
}>;

export const useHeaderStore = create<HeaderStore>((set) => ({
  subtitle: '',
  setSubtitle: (subtitle: string) => set(() => ({ subtitle })),
  unsetSubtitle: () => set(() => ({ subtitle: '' })),

  content: null,
  attachContent: (content: JSX.Element) => set(() => ({ content })),
  detachContent: () => set(() => ({ content: null })),

  get formattedSubtitle() {
    const subtitle = this.subtitle;
    return subtitle ? `-\u3000${subtitle}` : '';
  },
}));

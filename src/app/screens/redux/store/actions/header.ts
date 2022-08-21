import { ActionFactory } from './actions';

const KEY = 'header';
export const SET_SUBTITLE = `${KEY}/set-subtitle` as const;
export const UNSET_SUBTITLE = `${KEY}/unset-subtitle` as const;
export const ATTACH_CONTENT = `${KEY}/attach-content` as const;
export const DETACH_CONTENT = `${KEY}/detach-content` as const;

export type HeaderState = {
  subtitle: string;
  content: JSX.Element | null;
};

export const headerAction = {
  setSubtitle(subtitle: HeaderState['subtitle']) {
    return { type: SET_SUBTITLE, subtitle };
  },

  unsetSubtitle() {
    return { type: UNSET_SUBTITLE };
  },

  attachContent(content: HeaderState['content']) {
    return { type: ATTACH_CONTENT, content };
  },

  detachContent() {
    return { type: DETACH_CONTENT };
  },
} as const;

export type HeaderAction = ActionFactory<typeof headerAction>;

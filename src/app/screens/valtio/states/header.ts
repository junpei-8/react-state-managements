import memoize from 'proxy-memoize';
import { cloneElement } from 'react';
import { proxyWithComputed } from 'valtio/utils';

export const headerState = proxyWithComputed(
  { subtitle: '', content: null as JSX.Element | null },
  {
    clonedContent: ({ content }) => (content ? cloneElement(content) : null),
    formattedSubtitle: memoize((state) => {
      const subtitle = state.subtitle;
      return subtitle ? `-\u3000${subtitle}` : '';
    }),
  },
);

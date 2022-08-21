export const ATTACH_HEADER_CONTENT = 'ATTACH_HEADER_CONTENT' as const;
export const DETACH_HEADER_CONTENT = 'DETACH_HEADER_CONTENT' as const;

export type HeaderState = {
  content: JSX.Element | null;
};

export const attachHeaderContent = (content: HeaderState['content']) => ({
  type: ATTACH_HEADER_CONTENT,
  content,
});

export const detachHeaderContent = () => ({
  type: DETACH_HEADER_CONTENT,
});

export type HeaderAction = ReturnType<typeof attachHeaderContent | typeof detachHeaderContent>;

export const PAGE_KEYS = [1, 2, 3] as const;

export function getPageRoute(key: number) {
  return `page${key}`;
}

const COLOR_ID = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  gray: 90,
  default: 0,
} as const;

export function printLine(id: keyof typeof COLOR_ID = 'default', length = 24) {
  console.log(`\u001b[${COLOR_ID[id]}m${'-'.repeat(length)}\u001b[0m`);
}

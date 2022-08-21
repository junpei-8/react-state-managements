const WORDS = [
  'A-chan',
  'Ash',
  'Cap',
  'Furuyama',
  'Gaku',
  'Genki',
  'Gura',
  'Hinode',
  'Kyu-chan',
  'Leaf',
  'Pen',
  'Pose',
  'Sansan',
  'Shigure',
  'Sutesute',
  'Takana',
  'Tama',
  'Yottu',
  'Yu-za',
] as const;

export function getRandomString() {
  const random = Math.floor(Math.random() * WORDS.length);

  const word = WORDS[random];

  return `-\u3000${word}`;
}

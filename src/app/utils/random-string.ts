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

/** ランダムな文字列を生成する */
export function getRandomString() {
  const random = Math.floor(Math.random() * WORDS.length);

  return WORDS[random];
}

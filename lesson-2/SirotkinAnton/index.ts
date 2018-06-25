
// 1
function isInArray(...arg: any[]): Boolean {
  return arg.shift().every((item: any) => arg.includes(item));
}

// 2
function summator(...arg: Array<string|number>): number {
  return arg.reduce((summ: number, item: string|number): number => summ + (typeof item === 'string' ? parseInt(item, 10) : item), 0);
}

// 3
function getUnique(...arg: any[]): any[] {
  const unique: Set<any> = new Set();
  arg.forEach(item => (unique.add(item)));
  return Array.from(unique);
}

function revertWord(word: string): string {
  const start: string[] = word.split('')
  const reg: RegExp = /^[a-zA-Z]+$/;
  const toRevert: string[] = start.filter(letter => reg.test(letter)).reverse();
  let i = 0;
  return start.map((letter) => reg.test(letter) ? toRevert[i++] : letter).join('');
}

// 4
function revertSugWords(sug: string): string {
  return sug.split(' ').map(word => revertWord(word)).join(' ');
}


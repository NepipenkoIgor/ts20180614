
// 1
function isInArray(...arg: any[]): Boolean {
  return arg.shift().every((item: any) => arg.includes(item));
}

// 2
function summator(...arg: any[]): number {
  return arg.reduce((item: any, summ: number) => summ + parseInt(item, 10), 0);
}

// 3
function getUnique(...arg: any[]) {
  const unique: Set<any> = new Set();
  arg.forEach(item => (unique.add(item)));
  return Array.from(unique);
}

function revertWord(word: string): string {
  const start: string[] = word.split('')
  const reg: RegExp = /^[a-zA-Z]+$/;
  const toRevert: string[] = start.filter(letter => reg.test(letter)).reverse();
  let i = 0;
  return start.map((letter) => {
    if (reg.test(letter)) {
      return toRevert[i++];
    }
    return letter;
  }).join('');
}

// 4
function revertSugWords(sug: string): string {
  return sug.split(' ').map(word => revertWord(word)).join(' ');
}


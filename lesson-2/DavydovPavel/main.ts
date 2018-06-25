function isInArray(a: any[], ...args: any[]): boolean {
  let flag = true;
  for (let i = 0; i < args.length; i++) {
    const e = args[i];
    if (!a.includes(e)) {
      return false;
    }
  }
  return flag;
}
const __a = isInArray(['flag', 2, { a: 2, b: 1 }], 1, 2, 'flag', false, { a: 1, b: 2 });
console.log(__a);

type args = string | number;
function summator(...a: args[]): number {
  let output = 0;
  a.forEach(b => {
    if (typeof b === 'number') output += b;
    if (typeof b === 'string') {
      const v = parseInt(b);
      output += isNaN(v) ? 0 : v;
    }
  });
  return output;
}

const s = summator(1, 3, 'a', '5', '', 4, 8, '4');
console.log(s);
// 25

function getUnique(...args: any[]): any[] {
  const arr = [...args];
  let output: any[] = [];
  arr.forEach(a => {
    if (!output.includes(+a)) output.push(a);
  });
  return output;
}
const u = getUnique(5, 6, 5, '6', 88, 907, 22, 108, 22);
console.log(u);

function reverseData(text: string): string {
  return text
    .split(' ')
    .map(_check)
    .join(' ');
}

function _check(word: string) {
  const p = _getNoWord(word),
    wordLength = word.length;

  let count = 0;
  let dumb: string[] = word.match(/[^\W\d]/gi) || [];
  let output = '';

  if (dumb.length) {
    dumb = dumb.reverse();
    for (let i = 0; i < wordLength; i++) {
      output += p[i] || dumb[count];
      if (!p[i]) count++;
    }
  } else output = p.join();

  return output;
}

function _getNoWord(word: string): string[] {
  let result = [],
    r;

  const regexp = /[\W\d]/gi;
  while ((r = regexp.exec(word))) {
    const lit = r[0],
      pos = r.index;
    result[pos] = lit;
  }
  return result;
}

const r1 = reverseData('s1tar3t 2 hellow');
console.log(r1);
// t1rat3s 2 wolleh

const r2 = reverseData('s1ta$%r3t 2 hel^low');
console.log(r2);
// t1ra$%t3s 2 wol^leh

const r3 = reverseData('s1tar3t 2   low5');
console.log(r3);
// t1rat3s 2   wol5

const isInArray = (arr: any[], ...args: any[]): boolean => {
  for (const arg of args) {
    if (!arr.some(el => el === arg)) {
      return false;
    }
  }
  return true;
};

const summator = (...args: Array<number | string>): string | number =>
  args.reduce((acc, value) => {
    if (typeof acc === 'string' || typeof value === 'string') {
      return String(acc) + String(value);
    }
    return acc + value;
  });

const getUnique = (
  ...args: Array<number | string | boolean>
): Array<number | string | boolean> => {
  const uniqueArr: any[] = [];
  args.forEach(el => {
    if (uniqueArr.indexOf(el) + 1) {
      return;
    }
    uniqueArr.push(el);
  });
  return uniqueArr;
};

const revertWords = (sug: string): string =>
  sug
    .split(' ')
    .map(
      (word: string): string => {
        const initialArr: string[] = word.split('');
        const letterRe: RegExp = /^[A-Za-zА-Яа-я]+$/;
        const getReverdedLetter: () => string = (() => {
          const revertedArr = initialArr
            .filter((el: string) => letterRe.test(el))
            .reverse();
          let n = 0;
          return () => revertedArr[n++];
        })();
        return initialArr
          .map((el: string) => (letterRe.test(el) ? getReverdedLetter() : el))
          .join('');
      },
    )
    .join(' ');

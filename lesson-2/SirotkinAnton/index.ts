
function isInArray(...arg: any[]): Boolean {
  return arg[0].every((item: any) => arg.splice(1).includes(item));
}

function summator(...arg: any[]): number {
  return arg.reduce((item: any, summ: number) => summ + parseInt(item, 10), 0);
}

function getUnique(...arg: any[]) {
  const unique: Set<any> = new Set();
  arg.forEach(item => (unique.add(item)));
  return Array.from(unique);
}
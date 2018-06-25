
function isInArray(...arg: any[]) {
  return arg[0].every((item: any) => arg.splice(1).includes(item));
}

function summator(...arg: any[]) {
  return arg.reduce((item, summ) => summ + parseInt(item, 10), 0);
}
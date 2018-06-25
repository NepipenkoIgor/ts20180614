
function isInArray(...arg: any[]) {
  return arg[0].every((item: any) => arg.splice(1).includes(item));
}
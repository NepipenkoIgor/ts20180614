function isInArray(arr: any[], ...args: any[]): boolean {
  return args.every(a => arr.includes(a))
}

function isString(val: any): val is string {
  return typeof val === "string"
}

function isNumber(val: any): val is number {
  return typeof val === "number"
}

function summator(...args: string[]): number
function summator(...args: number[]): number
function summator(...args: (string | number)[]): number {
  return args.reduce(
    (acc: number, val: string | number): number =>
      acc + (isString(val) ? parseInt(val, 10) : val),
    0,
  )
}

function getUnique(...args: any[]): any[] {
  return args.reduce(
    (acc: any[], val: any) => (acc.includes(val) ? acc : [...acc, val]),
    [],
  )
}

function reverseCharacters(val: string): string {
  if (val === "") return val

  const regexp = /[A-z]/

  return val
    .split(" ")
    .reduce((acc: string[], val: string): string[] => {
      if (val === "") return acc

      const chars = val.split("")

      chars.forEach((left: string, idx: number) => {
        const rightIdx = chars.length - 1 - idx

        if (idx >= rightIdx) {
          return
        }

        const right: string = chars[rightIdx]

        if (regexp.test(left) && regexp.test(right)) {
          chars[idx] = right
          chars[rightIdx] = left
          return
        }

        chars[idx] = left
        chars[rightIdx] = right
      })

      return [...acc, chars.join("")]
    }, [])
    .join(" ")
}

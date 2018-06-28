function isInArray(arr: any[], ...rest: any[]): boolean {
    return [...rest].every(item => arr.indexOf(item) >= 0);
}


function summator(...args: (string | number) []): number {
    return  [...args].reduce((sum: number, current) => {
        if (isString(current)) {
            sum += parseInt(current);
        } else {
            sum += current;
        }
        return sum;
    }, 0);
}

function isString(arg: string | number): arg is string {
    return typeof arg === 'string';
}


function getUnique(...arr: any[]): Set<any> {
    const res = new Set();
    for (let item of [...arr]) {
        res.add(item);
    }
    return res;
}


function reverseLettersInString(str: string): string {
    let wordsArr: string[] = str.split(/(\s+)/);
    let reversedWordsArr: string[] = [];

    for (let word of wordsArr) {
        let lettersArrFromWord = Array.from(word).filter((char: string) => isLetter(char));
        let reversedWord = Array.from(word).reduce((acc: string, char: string) => {
            return acc += isLetter(char) ? lettersArrFromWord.pop() : char;
        }, '');

        reversedWordsArr.push(reversedWord);
    }

    let result = reversedWordsArr.reduce((acc: string, next: string) => {
        return acc += next ? next : ' ';
    });

    return result;
}

// helper functions start-->
function isLetter(char: string): boolean {
    return isValidStr(char) && !isNumber(char);
}


function isValidStr(str: string): boolean {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}


function isNumber(n: any): boolean {
    return !isNaN(+n) && isFinite(n);
}
// <---end of helper functions


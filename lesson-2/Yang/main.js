"use strict";
function isInArray(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest.slice().every(function (item) { return arr.indexOf(item) >= 0; });
}
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.slice().reduce(function (sum, current) {
        if (isString(current)) {
            sum += parseInt(current);
        }
        else {
            sum += current;
        }
        return sum;
    }, 0);
}
function isString(arg) {
    return typeof arg === 'string';
}
function getUnique() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var res = new Set();
    for (var _a = 0, _b = arr.slice(); _a < _b.length; _a++) {
        var item = _b[_a];
        res.add(item);
    }
    return res;
}
function reverseLettersInString(str) {
    var wordsArr = str.split(/(\s+)/);
    var reversedWordsArr = [];
    var _loop_1 = function (word) {
        var lettersArrFromWord = Array.from(word).filter(function (char) { return isLetter(char); });
        var reversedWord = Array.from(word).reduce(function (acc, char) {
            return acc += isLetter(char) ? lettersArrFromWord.pop() : char;
        }, '');
        reversedWordsArr.push(reversedWord);
    };
    for (var _i = 0, wordsArr_1 = wordsArr; _i < wordsArr_1.length; _i++) {
        var word = wordsArr_1[_i];
        _loop_1(word);
    }
    var result = reversedWordsArr.reduce(function (acc, next) {
        return acc += next ? next : ' ';
    });
    return result;
}
// helper functions start-->
function isLetter(char) {
    return isValidStr(char) && !isNumber(char);
}
function isValidStr(str) {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}
function isNumber(n) {
    return !isNaN(+n) && isFinite(n);
}
// <---end of helper functions

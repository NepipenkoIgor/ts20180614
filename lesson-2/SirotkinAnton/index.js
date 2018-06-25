"use strict";
// 1
function isInArray() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg.shift().every(function (item) { return arg.includes(item); });
}
// 2
function summator() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg.reduce(function (summ, item) { return summ + (typeof item === 'string' ? parseInt(item, 10) : item); }, 0);
}
// 3
function getUnique() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var unique = new Set();
    arg.forEach(function (item) { return (unique.add(item)); });
    return Array.from(unique);
}
function revertWord(word) {
    var start = word.split('');
    var reg = /^[a-zA-Z]+$/;
    var toRevert = start.filter(function (letter) { return reg.test(letter); }).reverse();
    var i = 0;
    return start.map(function (letter) { return reg.test(letter) ? toRevert[i++] : letter; }).join('');
}
// 4
function revertSugWords(sug) {
    return sug.split(' ').map(function (word) { return revertWord(word); }).join(' ');
}

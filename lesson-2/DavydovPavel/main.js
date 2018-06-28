function isInArray(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var flag = true;
    for (var i = 0; i < args.length; i++) {
        var e = args[i];
        if (!a.includes(e)) {
            return false;
        }
    }
    return flag;
}
var __a = isInArray(['flag', 2, { a: 2, b: 1 }], 1, 2, 'flag', false, { a: 1, b: 2 });
console.log(__a);
function summator() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var output = 0;
    a.forEach(function (b) {
        if (typeof b === 'number')
            output += b;
        if (typeof b === 'string') {
            var v = parseInt(b);
            output += isNaN(v) ? 0 : v;
        }
    });
    return output;
}
var s = summator(1, 3, 'a', '5', '', 4, 8, '4');
console.log(s);
// 25
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var arr = args.slice();
    var output = [];
    arr.forEach(function (a) {
        if (!output.includes(+a))
            output.push(a);
    });
    return output;
}
var u = getUnique(5, 6, 5, '6', 88, 907, 22, 108, 22);
console.log(u);
function reverseData(text) {
    return text
        .split(' ')
        .map(_check)
        .join(' ');
}
function _check(word) {
    var p = _getNoWord(word), wordLength = word.length;
    var count = 0;
    var dumb = word.match(/[^\W\d]/gi) || [];
    var output = '';
    if (dumb.length) {
        dumb = dumb.reverse();
        for (var i = 0; i < wordLength; i++) {
            output += p[i] || dumb[count];
            if (!p[i])
                count++;
        }
    }
    else
        output = p.join();
    return output;
}
function _getNoWord(word) {
    var result = [], r;
    var regexp = /[\W\d]/gi;
    while ((r = regexp.exec(word))) {
        var lit = r[0], pos = r.index;
        result[pos] = lit;
    }
    return result;
}
var r1 = reverseData('s1tar3t 2 hellow');
console.log(r1);
// t1rat3s 2 wolleh
var r2 = reverseData('s1ta$%r3t 2 hel^low');
console.log(r2);
// t1ra$%t3s 2 wol^leh
var r3 = reverseData('s1tar3t 2   low5');
console.log(r3);
// t1rat3s 2   wol5

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
    var output = '';
    var result;
    var regexp = /\w/gi;
    while (result = regexp.exec(text)) {
        alert('Найдено: ' + result[0] + ' на позиции:' + result.index);
        alert('Свойство lastIndex: ' + regexp.lastIndex);
    }
    return output;
}
reverseData('s1ta$%r3t 2 hel^low');

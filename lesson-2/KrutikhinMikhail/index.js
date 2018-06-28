var isInArray = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var _loop_1 = function (arg) {
        if (!arr.some(function (el) { return el === arg; })) {
            return { value: false };
        }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        var state_1 = _loop_1(arg);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
};
var summator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, value) {
        if (typeof acc === 'string' || typeof value === 'string') {
            return String(acc) + String(value);
        }
        return acc + value;
    });
};
var getUnique = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var uniqueArr = [];
    args.forEach(function (el) {
        if (uniqueArr.indexOf(el) + 1) {
            return;
        }
        uniqueArr.push(el);
    });
    return uniqueArr;
};
var revertWords = function (sug) {
    return sug
        .split(' ')
        .map(function (word) {
        var initialArr = word.split('');
        var letterRe = /^[A-Za-zА-Яа-я]+$/;
        var getReverdedLetter = (function () {
            var revertedArr = initialArr
                .filter(function (el) { return letterRe.test(el); })
                .reverse();
            var n = 0;
            return function () { return revertedArr[n++]; };
        })();
        return initialArr
            .map(function (el) { return (letterRe.test(el) ? getReverdedLetter() : el); })
            .join('');
    })
        .join(' ');
};

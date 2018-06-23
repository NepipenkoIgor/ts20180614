"use strict";
function isInArray(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.every(function (a) { return arr.includes(a); });
}
function isString(val) {
    return typeof val === "string";
}
function isNumber(val) {
    return typeof val === "number";
}
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, val) {
        return acc + (isString(val) ? parseInt(val, 10) : val);
    }, 0);
}
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, val) { return (acc.includes(val) ? acc : acc.concat([val])); }, []);
}
function reverseCharacters(val) {
    if (val === "")
        return val;
    var regexp = /[A-z]/;
    return val
        .split(" ")
        .reduce(function (acc, val) {
        if (val === "")
            return acc;
        var chars = val.split("");
        chars.forEach(function (left, idx) {
            var rightIdx = chars.length - 1 - idx;
            if (idx >= rightIdx) {
                return;
            }
            var right = chars[rightIdx];
            if (regexp.test(left) && regexp.test(right)) {
                chars[idx] = right;
                chars[rightIdx] = left;
                return;
            }
            chars[idx] = left;
            chars[rightIdx] = right;
        });
        return acc.concat([chars.join("")]);
    }, [])
        .join(" ");
}

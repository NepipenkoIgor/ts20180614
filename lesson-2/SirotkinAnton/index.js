"use strict";
function isInArray() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg[0].every(function (item) { return arg.splice(1).includes(item); });
}

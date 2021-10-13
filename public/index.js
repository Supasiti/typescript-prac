"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = exports.partition = void 0;
var random = function (max) {
    var result = Math.floor(Math.random() * max);
    return result;
};
var doPartitioning = function (acc, value, pivot) {
    if (value > pivot) {
        var newArr = __spreadArray(__spreadArray([], acc.upper, true), [value], false);
        var result = __assign(__assign({}, acc), { upper: newArr });
        return result;
    }
    if (value < pivot) {
        var newArr = __spreadArray(__spreadArray([], acc.lower, true), [value], false);
        var result = __assign(__assign({}, acc), { lower: newArr });
        return result;
    }
    return acc;
};
var partition = function (array, pivot) {
    var emptyArr = [];
    var result = array.reduce(function (acc, value) { return doPartitioning(acc, value, pivot); }, { lower: emptyArr, upper: emptyArr });
    return result;
};
exports.partition = partition;
var quickSort = function (array) {
    if (array.length === 1 || array.length === 0)
        return array;
    var emptyArr = [];
    var pivot = array[random(array.length)];
    var _a = (0, exports.partition)(array, pivot), lower = _a.lower, upper = _a.upper;
    var result = emptyArr.concat((0, exports.quickSort)(lower), [pivot], (0, exports.quickSort)(upper));
    return result;
};
exports.quickSort = quickSort;

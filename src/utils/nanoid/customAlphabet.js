"use strict";
exports.__esModule = true;
exports.customAlphabet = void 0;
var customRandom_1 = require("./customRandom");
var random_1 = require("./random");
var customAlphabet = function (alphabet, size) {
    return (0, customRandom_1.customRandom)(random_1.random, alphabet, size);
};
exports.customAlphabet = customAlphabet;

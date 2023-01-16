"use strict";
exports.__esModule = true;
exports.customRandom = void 0;
var customRandom = function (random, alphabet, size) {
    var mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1;
    var step = -~((1.6 * mask * size) / alphabet.length);
    return function (length) {
        if (length === void 0) { length = size; }
        var id = '';
        // eslint-disable-next-line no-constant-condition
        while (true) {
            var bytes = random(step);
            var i = step;
            while (i--) {
                // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
                id += alphabet[bytes[i] & mask] || '';
                if (id.length === +length) {
                    return id;
                }
            }
        }
    };
};
exports.customRandom = customRandom;

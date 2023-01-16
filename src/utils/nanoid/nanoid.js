"use strict";
exports.__esModule = true;
exports.getUserId = exports.getDataId = exports.getUrlId = exports.nanoid = exports.urlAlphabet = void 0;
var customAlphabet_1 = require("./customAlphabet");
var random_1 = require("./random");
exports.urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function (size) {
    if (size === void 0) { size = 21; }
    var id = "";
    var bytes = (0, random_1.random)(size);
    while (size--) {
        id += exports.urlAlphabet[bytes[size] & 63];
    }
    return id;
};
exports.nanoid = nanoid;
var alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
/**
 * url 友好 id, 忽略大小写
 */
exports.getUrlId = (0, customAlphabet_1.customAlphabet)(alphabet, 8);
/**
 * 数据 id，足够的长度来避免重复
 */
exports.getDataId = (0, customAlphabet_1.customAlphabet)(alphabet, 16);
/**
 * userId
 */
exports.getUserId = (0, customAlphabet_1.customAlphabet)(alphabet, 10);

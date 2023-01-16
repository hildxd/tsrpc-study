"use strict";
exports.__esModule = true;
exports.random = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var nodeCrypto = require('crypto');
function getRandomValues(buf) {
    if (nodeCrypto.randomBytes) {
        if (!(buf instanceof Uint8Array)) {
            throw new TypeError('expected Uint8Array');
        }
        if (buf.length > 65536) {
            var e = new Error();
            // @ts-ignore
            e['code'] = 22;
            e.message =
                "Failed to execute 'getRandomValues' on 'Crypto': The " +
                    "ArrayBufferView's byte length (" +
                    buf.length +
                    ') exceeds the ' +
                    'number of bytes of entropy available via this API (65536).';
            e.name = 'QuotaExceededError';
            throw e;
        }
        var bytes = nodeCrypto.randomBytes(buf.length);
        buf.set(bytes);
        return buf;
    }
    else {
        throw new Error('No secure random number generator available.');
    }
}
var random = function (bytes) {
    return getRandomValues(new Uint8Array(bytes));
};
exports.random = random;

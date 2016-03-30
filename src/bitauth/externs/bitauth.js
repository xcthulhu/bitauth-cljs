/**
 * @fileoverview Closure Compiler externs for BitPay's BitAuth 0.3.2
 * @see https://github.com/bitpay/bitauth
 * @externs
 */

/**
 * @type {Object}
 */
var bitauth = {};

/**
 * @return {Object}
 */
bitauth.generateSin = function() {};

/**
 * @param {string} privkey
 * @return {string}
 */
bitauth.getPublicKeyFromPrivateKey = function (privkey) {};

/**
 * @param {string} pubkey
 * @return {string}
 */
bitauth.getSinFromPublicKey = function (pubkey) {};

/**
 * @param {string} data
 * @param {string} privkey
 * @return {string}
 */
bitauth.sign = function(data, privkey) {};

/**
 * @param {string} data
 * @param {string} pubkey
 * @param {string} hexsignature
 * @return {boolean}
 */
bitauth.verifySignature = function(data, pubkey, hexsignature) {};

/**
 * @param {string} sin
 * @return {boolean}
 */
bitauth.validateSin = function(sin) {};

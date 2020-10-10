'use strict'

/**
 * Tries to execute a function and discards any error that occurs.
 * @param {Function} fn - Function that might or might not throw an error.
 * @returns {?*} Return-value of the function when no error occurred.
 */
module.exports = function(fn) {

	try { return fn() } catch (e) {}

}

/**
 * Tries to execute an asynchronous function and discards any error that occurs.
 * @param {Function} fn - Asynchronous function that might or might not throw an error.
 * @returns {?*} Promise which resolves with the return-value of the asynchronous function when no error occurred.
 */
module.exports.promise = async function (fn) {

	try { return await fn() } catch (e) {}

}
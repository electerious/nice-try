/**
 * Executes an asynchronous function and returns its result, suppressing any errors that occur.
 * @param {Function} fn - An asynchronous function to execute.
 * @returns {Promise<*>} The result of the function if it resolves successfully, otherwise undefined if an error is thrown.
 */
/**
 * Tries to execute an asynchronous function and discards any error that occurs.
 */
export default async function niceTry(fn) {
  try {
    return await fn()
  } catch (e) {}
}

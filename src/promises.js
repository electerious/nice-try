/**
 * Executes an asynchronous function and returns its result, suppressing any errors that occur.
 *
 * @param {Function} fn - An asynchronous function to execute.
 * @returns {Promise<*>} The result of the function if it resolves successfully, otherwise undefined if an error is thrown.
 */
export default async function niceTry(fn) {
  try {
    return await fn()
    // eslint-disable-next-line no-empty
  } catch {}
}

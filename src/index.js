/**
 * Executes the provided function and returns its result.
 * If an error is thrown during execution, the error is silently ignored and `undefined` is returned.
 *
 * @param {Function} fn - The function to execute.
 * @returns {*} The return value of the function, or `undefined` if an error occurred.
 */
export default function niceTry(fn) {
  try {
    return fn()
    // eslint-disable-next-line no-empty
  } catch {}
}

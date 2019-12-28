/**
 * Try to execute a function and discard any error that occurs.
 * @param fn The function to execute.
*/
declare function niceTry<T>(fn: () => T): T | void

export = niceTry

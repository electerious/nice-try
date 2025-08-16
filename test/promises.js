import assert from 'node:assert/strict'
import test from 'node:test'
import niceTry from '../src/promises.js'

test('should return a value when called with an asynchronous function that returns a value', async () => {
  // eslint-disable-next-line require-await
  assert.equal(await niceTry(async () => JSON.parse('error')), undefined)
})

test('should return undefined when called with an asynchronous function that throws an error', async () => {
  // eslint-disable-next-line require-await
  assert.equal(await niceTry(async () => JSON.parse('true')), true)
})

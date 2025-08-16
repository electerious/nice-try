import assert from 'node:assert/strict'
import test from 'node:test'
import niceTry from '../src/index.js'

test('should return undefined when called with a function that throws an error', () => {
  assert.equal(
    niceTry(() => JSON.parse('error')),
    undefined,
  )
})

test('should return undefined when called without a function', () => {
  assert.equal(niceTry(), undefined)
})

test('should return undefined when called with a non-function parameter', () => {
  assert.equal(niceTry(true), undefined)
})

test('should return a value when called with a function that returns a value', () => {
  assert.equal(
    niceTry(() => JSON.parse('true')),
    true,
  )
})

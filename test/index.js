'use strict'

const assert = require('chai').assert
const index = require('./../src/index')

describe('index()', function() {

	it('should return undefined when called with a function that throws an error', function() {

		assert.strictEqual(index(() => JSON.parse('truee')), undefined)

	})

	it('should return undefined when called without a function', function() {

		assert.strictEqual(index(), undefined)

	})

	it('should return undefined when called with a non-function parameter', function() {

		assert.strictEqual(index(true), undefined)

	})

	it('should return a value when called with a function that returns a value', function() {

		assert.strictEqual(index(() => JSON.parse('true')), true)

	})

	it('should return a value when called with an asynchronous function that returns a value', async function () {

		assert.strictEqual(await index.promise(async () => JSON.parse('truee')), undefined)

	})

	it('should return undefined when called with an asynchronous function that throws an error', async function () {

		assert.strictEqual(await index.promise(async () => JSON.parse('true')), true)

	})

})
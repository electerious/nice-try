# nice-try

![Build](https://github.com/electerious/nice-try/workflows/Build/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/electerious/nice-try/badge.svg?branch=master)](https://coveralls.io/github/electerious/nice-try?branch=master)

A function that tries to execute a function and discards any error that occurs.

## Install

```
npm install nice-try
```

## Usage

```js
const niceTry = require('nice-try')

niceTry(() => JSON.parse('true')) // true
niceTry(() => JSON.parse('truee')) // undefined
niceTry() // undefined
niceTry(true) // undefined

await niceTry.promise(async () => JSON.parse('true')) // true
await niceTry.promise(async () => JSON.parse('truee')) // undefined
```

## API

### Parameters

- `fn` `{Function}` Function that might or might not throw an error.

### Returns

- `{?*}` Return-value of the function when no error occurred.
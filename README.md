# nice-try

![Build](https://github.com/electerious/nice-try/workflows/Build/badge.svg)

A function that tries to execute a function and discards any error that occurs.

## Install

```bash
npm install nice-try
```

## Usage

```js
import niceTry from 'nice-try'

niceTry(() => JSON.parse('true')) // true
niceTry(() => JSON.parse('error')) // undefined
niceTry() // undefined
niceTry(true) // undefined
```

```js
import niceTry from 'nice-try/promises'

await niceTry(async () => JSON.parse('true')) // true
await niceTry(async () => JSON.parse('error')) // undefined
```

## API

### `nice-try`

#### Parameters

- `fn` `{Function}` The function to execute.

#### Returns

- `{*}` The return value of the function, or `undefined` if an error occurred.

### `nice-try/promises`

#### Parameters

- `fn` `{Function}` An asynchronous function to execute.

#### Returns

- `{Promise<*>}` The result of the function if it resolves successfully, otherwise undefined if an error is thrown.

## What others say

This module is a controversial thing and people like to get mad about it. I decided to give those people a voice. Here's what they're saying.

> fundamentally inane

— frou_dh

> the worst Javascript library […] in several categories

— kuzux

> how is this a thing

— uint8_t

> This is blowing my mind

— mr_jim_lahey

> a shit-tastic try-catch alias

— Dropping_fruits

> I assumed every commit was a joke, but after researching the maintainer a bit I'm not sure it is...

— MrPineappleHat

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.0.2] - 2025-08-16

### Fixed

- Duplicate JSDoc comments

## [4.0.1] - 2025-07-07

### Changed

- Updated README to match functions

## [4.0.0] - 2025-07-07

Modernized codebase with ESM modules, less dependencies, updated Node.js support and common code style.

### Changed

- Requires Node.js version 20 or higher
- Rewritten to use ESM modules (e.g. `import niceTry from 'nice-try'`)
- `niceTry.promise` now needs to be imported via `import niceTry from 'nice-try/promises'`

## [3.0.1] - 2022-09-17

### Added

- README now includes a "What others say" section

## [3.0.0] - 2021-02-28

### Changed

- Drop support for Node.js versions older than version 10
- Swicthed to GitHub actions

## [2.1.0] - 2020-10-10

### Added

- `niceTry.promise()` (Thanks @Richienb, #26, #25)

## [2.0.1] - 2020-03-20

### Changed

- Updated dev dependencies

## [2.0.0] - 2018-10-28

### Changed

- Drop support for Node.js versions older than version 8

## [1.0.5] - 2018-08-25

### Changed

- Removed `prepublish` script from `package.json`

## [1.0.4] - 2017-08-08

### Added

- Added a changelog

### Changed

- Ignore `yarn.lock` and `package-lock.json` files

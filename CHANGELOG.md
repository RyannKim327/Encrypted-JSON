# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2026-04-05

### Changed
- Refined `encodeOptions` TypeScript definition to use optional properties (`?`) instead of union types (`null | undefined`) for better DX.

## [0.1.0] - 2026-04-04

### Added
- Official Release: "Idea officially implemented after 4 years."
- Full Refactor: Complete migration from JavaScript to TypeScript.
- Algorithm Upgrade: Moved from a fixed base-19 character rotation to a more secure key-based XOR cipher.
- Improved API: Simplified function signatures and added `Buffer` support.
- Error Handling: Added graceful handling for parsing errors during decryption.

## [0.0.1] - 2022-11-25

### Added
- Initial Concept: First published as `json-enc-dec` on npm.
- Original Logic: Used a base-19 character encoding method for basic obfuscation.

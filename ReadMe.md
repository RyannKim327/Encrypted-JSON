# Encrypted JSON Data (json-enc-dec)

A lightweight JSON data encryption and decryption library for basic data obfuscation and protection. Originally conceived in 2022 and fully refactored in 2026, this library provides a simple yet effective way to encrypt JSON objects and arrays using a key-based XOR cipher.

Inspired by BSON, `json-enc-dec` aims to provide a straightforward tool for developers who need to hide their data structure from casual inspection without the overhead of heavy cryptographic suites.

## Installation

```bash
npm install json-enc-dec@latest
```

## Why json-enc-dec?

- **Simplicity**: No complex configurations or heavy dependencies.
- **TypeScript First**: Fully rewritten in TypeScript for modern development workflows.
- **Legacy Proven**: Based on an idea that has been evolving since 2022.
- **XOR Logic**: Uses a repeating key XOR algorithm to ensure data is sufficiently obfuscated.

## Usage

### 1. Basic Encryption
Encrypt your JSON data into a pseudo-string format suitable for transmission or storage.

```typescript
import { encrypt } from 'json-enc-dec';

const data = { 
    user: "Ryann", 
    role: "Admin",
    permissions: ["read", "write"]
};
const key = "my-secret-vault-key";

// Result is a string by default
const encrypted = encrypt(data, key);
console.log('Encrypted Data:', encrypted);
```

### 2. Decryption
Restore your encrypted data back to its original JSON form.

```typescript
import { decrypt } from 'json-enc-dec';

const key = "my-secret-vault-key";
const buffer = Buffer.from(encryptedData); // Ensure you have the data as a Buffer

const original = decrypt(buffer, key);
console.log('Decrypted User:', original.user);
```

### 3. Buffer Output
If you need raw binary data, you can request a `Buffer` directly from the `encrypt` function.

```typescript
const encryptedBuffer = encrypt(data, key, true);
```

## How It Works

The library stringifies your JSON input and converts it into a binary Buffer. It then iterates through each byte, performing a bitwise XOR operation against the bytes of your provided key. If the key is shorter than the data, it wraps around and repeats.

1. **Input**: `JSON Object/Array`
2. **Key**: `User-defined string`
3. **Logic**: `Data[i] ^ Key[i % Key.length]`
4. **Output**: `Pseudo-string` (readable characters representing bytes) or `Buffer`.

## Changelog & History

### v0.1.0 (April 4, 2026)
- **Official Release**: "Idea officially implemented after 4 years."
- **Full Refactor**: Complete migration from JavaScript to TypeScript.
- **Algorithm Upgrade**: Moved from a fixed base-19 character rotation to a more secure key-based XOR cipher.
- **Improved API**: Simplified function signatures and added `Buffer` support.
- **Error Handling**: Added graceful handling for parsing errors during decryption.

### v0.0.1 (November 25, 2022)
- **Initial Concept**: First published as `json-enc-dec` on npm.
- **Original Logic**: Used a base-19 character encoding method for basic obfuscation.
- **Legacy Support**: Focused on simple Node.js `require` usage.

## Credits

Special thanks to the following for their support throughout the project's 4-year journey:
- BSON (Inspiration)
- Salvador
- John Jeremy Antiguo
- Earl Shine Sawir
- John Paul Caigas
- Lester Navarra
- Mark Kevin Manalo
- John Roy Lapida Calimlim
- Mart Anthony Salazar

---
*Disclaimer: This library provides basic obfuscation and XOR encryption. It is suitable for protecting data from casual viewing but should not be used for high-stakes security or sensitive personal identifiable information (PII) without additional security layers.*

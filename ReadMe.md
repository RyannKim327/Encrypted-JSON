# Encrypted JSON Data
### MPOP Reverse II

> This program is inspired by Bson, which is also encrypts json data for MongoDB. But in this program, you may only use json file or json object to encrypt.

### How to install (NodeJS):
```Bash
npm i json-encrypt@latest
```

### How to encrypt (NodeJS): .encrypt(jsonData, isFile)
```NodeJS
const fs = require("fs")
const json = require("json-encrypt")

// Non-file
console.log(json.encrypt({
	"sample": "Hello World"
}, false))

// Using file
let file = fs.readFileSync("sample.json", "utf8")
console.log(json.encrypt(file, false))
```
### Output:
```
691f61525e5h5d561f311f3f565d5d5g1d4b5g605d551f6b
```
---
### How to decrypt (NodeJS): .decrypt(encryptedData)
```NodeJS
const json = require("json-encrypt")

console.log(json.decrypt("691f61525e5h5d561f311f3f565d5d5g1d4b5g605d551f6b))
```

### Output:
```JSON
{ sample: 'Hello World' }
```
> This output is already in json objest, so that you may call it like:
```NodeJS
const json = require("json-encrypt")

console.log(json.decrypt("691f61525e5h5d561f311f3f565d5d5g1d4b5g605d551f6b).sample)
```
### Output:

```
Hello World
```
---
> Credits to the main idea of this program.

### Credits also to the following
* BSON
* Salvador
* John Jeremy Antiguo
* Earl Shine Sawir
* John Paul Caigas
* Lester Navarra
* Mark Kevin Manalo
* John Roy Lapida Calimlim
* Mart Anthony Salazar

> **Note** : *I give credits not just for those who help me for this project, but also to those who help me to my entire journey in making this kind of project.*
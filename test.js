const a = require("./index")

console.log(a.encrypt({
	"sample": "Hello World"
}))

let data = a.decrypt("691f61525e5h5d561f311f3f565d5d5g1d4b5g605d551f6b")

console.log(data)
console.log(data.sample)
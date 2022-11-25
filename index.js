let data_encrypt = 19

const encrypt = (json, isFile) => {
	let result = ""
	let str = JSON.stringify(json)
	if(isFile)
		str = json
	for(let i = 0; i < str.length; i++){
		let data = str.charCodeAt(i)
		result +=  data.toString(data_encrypt)
	}
	return result
}

const decrypt = (json) => {
	let result = ""
	let str = json
	for(let i = 0; i < str.length; i += 2){
		let s = str[i] + str[i + 1]
		let data = parseInt(s, data_encrypt)
		let toStr = String.fromCharCode(data)
		result += toStr
	}
	return JSON.parse(result)
}
module.exports = {
	encrypt,
	decrypt
}
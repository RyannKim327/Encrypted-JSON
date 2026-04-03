import { json } from "./interface";

const buffertoPseudo = (buffer: Buffer) => {
	return Array.from(buffer)
		.map(byte => String.fromCharCode(byte))
		.join('');
}

export function encrypt(data: json | json[], key: string, returnBuffer = false) {
	// TODO: To initally buffer or convert from string to buffered text
	const jsonText = JSON.stringify(data)
	const buff = Buffer.from(jsonText, "utf8")
	const keyBuff = Buffer.from(key, "utf8")

	// TODO: To create slots or empty slots
	const cipherBuff = Buffer.alloc(buff.length)

	// TODO: To loop all the characters to convert
	for (let i = 0; i < buff.length; i++) {
		cipherBuff[i] = buff[i] ^ keyBuff[i % keyBuff.length];
	}

	if (returnBuffer) return cipherBuff;
	return buffertoPseudo(cipherBuff);
}

export function decrypt(data: Buffer, key: string) {
	const keyBuff = Buffer.from(key, "utf8")
	const buff = Buffer.alloc(data.length)

	for (let i = 0; i < buff.length; i++) {
		buff[i] = data[i] ^ keyBuff[i % keyBuff.length]
	}

	const result = buff.toString("utf8")

	try {
		return JSON.parse(result)
	} catch (e) {
		return {
			"error": "Data cannot be parse",
			"data": result
		}
	}
}

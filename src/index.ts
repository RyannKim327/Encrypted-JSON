import { readFileSync, writeFileSync } from "fs";
import { encodeOptions, json } from "./interface";

const buffertoPseudo = (buffer: Buffer) => {
	return Array.from(buffer)
		.map(byte => String.fromCharCode(byte))
		.join('');
}

export function encrypt(data: json | json[], key: string, opts: encodeOptions | undefined | null) {
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

	// TODO: To save as file
	if (opts !== undefined) {
		if (opts?.saveTo) {
			if (opts?.saveTo?.trim().length > 0) {
				writeFileSync(opts.saveTo, buffertoPseudo(cipherBuff))
			}
		}

		if (opts?.returnBuffer) return cipherBuff;
	}
	return buffertoPseudo(cipherBuff);
}

export function decrypt(fileOrBuffer: Buffer | string, key: string) {
	let data = fileOrBuffer
	if (typeof (data) === "string") {
		data = readFileSync(fileOrBuffer)
	}

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

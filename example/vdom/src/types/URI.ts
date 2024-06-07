import { Scheme } from "./Scheme"

export class URI
{
	static fromString (value: string) {
		const uri = new URI()
		
		uri.scheme = 'data'
		
		return uri
	}

	scheme: Scheme = Scheme.FILE

	path: string = ''

	query?: string

	constructor (value: string) {
		
	}

	toString () {
		return `${this.scheme}:`
	}
}
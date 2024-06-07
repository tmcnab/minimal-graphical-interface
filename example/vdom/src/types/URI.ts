import { Scheme } from "./Scheme"

export class URI
{
	scheme: Scheme = Scheme.FILE

	toString () {
		return `${this.scheme}:`
	}
}
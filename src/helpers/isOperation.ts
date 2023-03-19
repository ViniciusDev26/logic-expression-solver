import {operations} from '../core/operations';

export function isOperation(letter: string) {
	const keys = Object.keys(operations);
	return keys.includes(letter);
}

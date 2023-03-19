import {operations} from './core/operations';
import {truthTable} from './core/truthTable';
import {extractVariables} from './helpers/extractVariables';
import {isOperation} from './helpers/isOperation';
import {normalizeExpression} from './helpers/normalizeExpression';

const map: Record<number, string> = {
	1: 'one',
	2: 'two',
	3: 'three',
};

function main() {
	const expression = 'a | b';
	const variables = extractVariables(expression);
	const table = truthTable[map[variables.length]];

	console.log(variables.length ** 2);
	let counter = 0;
	for (let i = 0; i < variables.length ** 2; i++) {
		let indexWord = 0;
		const normalizedExpression = normalizeExpression(expression);
		for (const letter of normalizedExpression) {
			if (!isOperation(letter)) {
				indexWord++;
				continue;
			}

			const operationsFunction = operations[letter];
			const variableOne = normalizedExpression[indexWord - 1];
			const variableTwo = normalizedExpression[indexWord + 1];

			const result = operationsFunction(table[variableOne][counter], table[variableTwo][counter]);
			console.log(result);
			indexWord++;
		}

		console.log();

		counter++;
	}
}

main();


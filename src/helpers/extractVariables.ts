import {isOperation} from './isOperation';
import {normalizeExpression} from './normalizeExpression';

export function extractVariables(expression: string): string[] {
	const variables: string[] = [];
	const expressionNormalized = normalizeExpression(expression);

	for (const letter of expressionNormalized) {
		if (isOperation(letter) || variables.includes(letter)) {
			continue;
		}

		variables.push(letter);
	}

	return variables;
}

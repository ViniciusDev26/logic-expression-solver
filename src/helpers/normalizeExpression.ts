export function normalizeExpression(expression: string) {
	const expressionNormalized = expression
		.replaceAll(' ', '')
		.replaceAll('->', '→')
		.toLowerCase();

	return expressionNormalized;
}

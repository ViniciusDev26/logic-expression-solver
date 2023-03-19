export function implies(a: boolean, b: boolean) {
	if (b || (!a && !b)) {
		return true;
	}

	return false;
}

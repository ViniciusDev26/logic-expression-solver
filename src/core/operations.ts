/* eslint-disable @typescript-eslint/naming-convention */
import {implies} from './operators/ implies';
import {and} from './operators/and';
import {or} from './operators/or';

export const operations: Record<string, (a: boolean, b: boolean) => boolean> = {
	'^': and,
	'→': implies,
	'|': or,
};

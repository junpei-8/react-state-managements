import { proxy } from 'valtio';

export const counterState = proxy({ value: 0 });

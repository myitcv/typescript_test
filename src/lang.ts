// type signatures generated by http://dev-int.modelogiq.com/frontend/type-generator/tree/dev/curryGenerator
export function curry<R>(fn: () => R, thisArg: Object): () => R;

export function curry<T0, R>(fn: (a0: T0) => R, thisArg: Object): (a0: T0) => R;
export function curry<T0, R>(fn: (a0: T0) => R, thisArg: Object, a0: T0): () => R;

export function curry<T0, T1, R>(fn: (a0: T0, a1: T1) => R, thisArg: Object): (a0: T0, a1: T1) => R;
export function curry<T0, T1, R>(fn: (a0: T0, a1: T1) => R, thisArg: Object, a0: T0): (a1: T1) => R;
export function curry<T0, T1, R>(fn: (a0: T0, a1: T1) => R, thisArg: Object, a0: T0, a1: T1): () => R;

export function curry<T0, T1, T2, R>(fn: (a0: T0, a1: T1, a2: T2) => R, thisArg: Object): (a0: T0, a1: T1, a2: T2) => R;
export function curry<T0, T1, T2, R>(fn: (a0: T0, a1: T1, a2: T2) => R, thisArg: Object, a0: T0): (a1: T1, a2: T2) => R;
export function curry<T0, T1, T2, R>(fn: (a0: T0, a1: T1, a2: T2) => R, thisArg: Object, a0: T0, a1: T1): (a2: T2) => R;
export function curry<T0, T1, T2, R>(fn: (a0: T0, a1: T1, a2: T2) => R, thisArg: Object, a0: T0, a1: T1, a2: T2): () => R;

export function curry<T0, T1, T2, T3, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3) => R, thisArg: Object): (a0: T0, a1: T1, a2: T2, a3: T3) => R;
export function curry<T0, T1, T2, T3, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3) => R, thisArg: Object, a0: T0): (a1: T1, a2: T2, a3: T3) => R;
export function curry<T0, T1, T2, T3, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3) => R, thisArg: Object, a0: T0, a1: T1): (a2: T2, a3: T3) => R;
export function curry<T0, T1, T2, T3, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3) => R, thisArg: Object, a0: T0, a1: T1, a2: T2): (a3: T3) => R;
export function curry<T0, T1, T2, T3, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3): () => R;

export function curry<T0, T1, T2, T3, T4, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4) => R, thisArg: Object): (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4) => R;
export function curry<T0, T1, T2, T3, T4, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4) => R, thisArg: Object, a0: T0): (a1: T1, a2: T2, a3: T3, a4: T4) => R;
export function curry<T0, T1, T2, T3, T4, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4) => R, thisArg: Object, a0: T0, a1: T1): (a2: T2, a3: T3, a4: T4) => R;
export function curry<T0, T1, T2, T3, T4, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4) => R, thisArg: Object, a0: T0, a1: T1, a2: T2): (a3: T3, a4: T4) => R;
export function curry<T0, T1, T2, T3, T4, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3): (a4: T4) => R;
export function curry<T0, T1, T2, T3, T4, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4): () => R;

export function curry<T0, T1, T2, T3, T4, T5, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R, thisArg: Object): (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R;
export function curry<T0, T1, T2, T3, T4, T5, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R, thisArg: Object, a0: T0): (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R;
export function curry<T0, T1, T2, T3, T4, T5, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R, thisArg: Object, a0: T0, a1: T1): (a2: T2, a3: T3, a4: T4, a5: T5) => R;
export function curry<T0, T1, T2, T3, T4, T5, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R, thisArg: Object, a0: T0, a1: T1, a2: T2): (a3: T3, a4: T4, a5: T5) => R;
export function curry<T0, T1, T2, T3, T4, T5, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3): (a4: T4, a5: T5) => R;
export function curry<T0, T1, T2, T3, T4, T5, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4): (a5: T5) => R;
export function curry<T0, T1, T2, T3, T4, T5, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5): () => R;

export function curry<T0, T1, T2, T3, T4, T5, T6, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R, thisArg: Object): (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R, thisArg: Object, a0: T0): (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R, thisArg: Object, a0: T0, a1: T1): (a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R, thisArg: Object, a0: T0, a1: T1, a2: T2): (a3: T3, a4: T4, a5: T5, a6: T6) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3): (a4: T4, a5: T5, a6: T6) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4): (a5: T5, a6: T6) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5): (a6: T6) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6): () => R;

export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object): (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object, a0: T0): (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object, a0: T0, a1: T1): (a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object, a0: T0, a1: T1, a2: T2): (a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3): (a4: T4, a5: T5, a6: T6, a7: T7) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4): (a5: T5, a6: T6, a7: T7) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5): (a6: T6, a7: T7) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6): (a7: T7) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7): () => R;

export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object): (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0): (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0, a1: T1): (a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0, a1: T1, a2: T2): (a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3): (a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4): (a5: T5, a6: T6, a7: T7, a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5): (a6: T6, a7: T7, a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6): (a7: T7, a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7): (a8: T8) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8): () => R;

export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object): (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0): (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1): (a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1, a2: T2): (a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3): (a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4): (a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5): (a6: T6, a7: T7, a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6): (a7: T7, a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7): (a8: T8, a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8): (a9: T9) => R;
export function curry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9) => R, thisArg: Object, a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8, a9: T9): () => R;
/* tslint:disable:no-any */
export function curry<R>(fn: Function, thisArg: Object, ...argArray: any[]): any {
	/* tslint:disable:no-any */
	/* tslint:disable:ensure-no-function-bind */
	return fn.bind(thisArg, ...argArray);
	/* tslint:enable:ensure-no-function-bind */
}

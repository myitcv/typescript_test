export interface Uint64Constructor {
	constructor(n: number): Uint64;
	Parse(s: string): Uint64;
	(n: number): Uint64;
}

export interface Uint64 {
	toNumber(): number;
}

declare var Uint64: Uint64Constructor;

export interface Uint32Constructor {
	constructor(n: number): Uint32;
	Parse(s: string): Uint32;
	(n: number): Uint32;
}

export interface Uint32 {
	toNumber(): number;
}

declare var Uint32: Uint32Constructor;

export interface Int64Constructor {
	constructor(n: number): Uint64;
	Parse(s: string): Uint64;
	(n: number): Uint64;
}

export interface Int64 {
	toNumber(): number;
}

declare var Int64: Int64Constructor;

export interface Int32Constructor {
	constructor(n: number): Int32;
	Parse(s: string): Int32;
	(n: number): Int32;
}

export interface Int32 {
	toNumber(): number;
}

declare var Int32: Int32Constructor;

///<reference path="./custom_types.d.ts" />

export namespace helloworld {
	export class HelloRequest {
		static deserializeBinary(arr: Uint8Array): HelloRequest;
		setName(s: string): void;
		getName(): string;
		setAge(n: number): void;
		getAge(): number;
		getDob(): Instant;
		setDob(n: Instant): void;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): HelloRequest;
	}
	export class HelloReply {
		static deserializeBinary(arr: Uint8Array): HelloReply;
		setMessage(s: string): void;
		getMessage(): string;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): HelloReply;
	}

	export class Instant {
		static deserializeBinary(arr: Uint8Array): Instant;
		setSeconds(o: number): void;
		getSeconds(): number;
		setMicroseconds(o: number): void;
		getMicroseconds(): number;
		cloneMessage(o: Instant): Instant;
		serializeBinary(): Uint8Array;
	}
}

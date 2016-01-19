///<reference path="./custom_types.d.ts" />

export namespace helloworld {
	export class HelloRequest {
		setName(s: string): void;
		getName(): string;
		setAge(n: number): void;
		getAge(): number;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): HelloRequest;
		static deserializeBinary(arr: Uint8Array): HelloRequest;
	}
	export class HelloReply {
		setMessage(s: string): void;
		getMessage(): string;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): HelloReply;
		static deserializeBinary(arr: Uint8Array): HelloReply;
	}
}

export namespace helloworld {
	export class HelloRequest {
		setName(s: string): void;
		getName(): string;
		setAge(n: number): void;
		getAge(): number;
		serializeBinary(): ArrayBuffer;
		static deserializeBinary(arr: Uint8Array): HelloRequest;
	}
	export class HelloReply {
		setMessage(s: string): void;
		getMessage(): string;
		serializeBinary(): ArrayBuffer;
		static deserializeBinary(arr: Uint8Array): HelloReply;
	}
}

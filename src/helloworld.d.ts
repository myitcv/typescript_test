///<reference path="./custom_types.d.ts" />

export namespace helloworld {
	export class HelloRequest {
		static deserializeBinary(arr: Uint8Array): HelloRequest;
		setName(s: string): void;
		getName(): string;
		setAge(n: number): void;
		getAge(): number;
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
	export class TestMessage {
		static deserializeBinary(arr: Uint8Array): TestMessage;
		static OneoffieldCase: typeof OneoffieldEnum;
		setStringfield(s: string): void;
		getStringfield(): string;
		setUint64field(s: number): void;
		getUint64field(): number;
		setOneofuint64field(n: number): void;
		clearOneofuint64field(): void;
		getOneofuint64field(): number;
		getOneofstringfield(): string;
		clearOneofstringfield(): void;
		setOneofstringfield(e: string): void;
		getOneoffieldCase(): number;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): TestMessage;
	}

	export enum OneoffieldEnum {
		ONEOFFIELD_NOT_SET = 0,
		ONEOFSTRINGFIELD = 2,
		ONEOFUINT64FIELD = 3
	}
}

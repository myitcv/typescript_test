import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";

export const PROTOBUF_DEFAULT_NORMAL_STRING: string = "";
export const PROTOBUF_DEFAULT_NORMAL_UINT64: Uint64 = Uint64(0);
export const PROTOBUF_DEFAULT_ONEOF_STRING: string = undefined;
export const PROTOBUF_DEFAULT_ONEOF_UINT64: Uint64 = undefined;

export interface MessageType {
	Serialize(): ArrayBuffer;
}

export class HelloRequest implements MessageType {
	private underlying: helloworld.HelloRequest;

	constructor() {
		this.underlying = new helloworld.HelloRequest();
	}

	static fromHelloRequest(u: helloworld.HelloRequest): HelloRequest {
		let ihr = new HelloRequest();
		ihr.underlying = u.cloneMessage();
		return ihr;
	}

	static Deserialize(buffer: Uint8Array): HelloRequest {
		return HelloRequest.fromHelloRequest(helloworld.HelloRequest.deserializeBinary(buffer));
	}

	SetName(name: string): HelloRequest {
		if ((this.underlying.getName() === "") && (name === undefined || name === null)) {
			return this;
		} else if (this.underlying.getName() === name) {
			return this;
		} else {
			let instance = HelloRequest.fromHelloRequest(this.underlying.cloneMessage());
			instance.underlying.setName(name);
			return instance;
		}
	}

	get Name(): string {
		return this.underlying.getName();
	}

	SetAge(age: Uint64): HelloRequest {
		if ((this.underlying.getAge() === 0) && (age === undefined || age === null)) {
			return this;
		} else if (this.underlying.getAge() === age.toNumber()) {
			return this;
		} else {
			let instance = HelloRequest.fromHelloRequest(this.underlying.cloneMessage());
			instance.underlying.setAge(age.toNumber());
			return instance;
		}
	}

	get Age(): Uint64 {
		return Uint64(this.underlying.getAge());
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}
}

export class HelloReply implements MessageType {
	private underlying: helloworld.HelloReply;

	constructor() {
		this.underlying = new helloworld.HelloReply();
	}

	static fromHelloReply(u: helloworld.HelloReply): HelloReply {
		let ihr = new HelloReply();
		ihr.underlying = u.cloneMessage();
		return ihr;
	}

	static Deserialize(buffer: Uint8Array): HelloReply {
		return HelloReply.fromHelloReply(helloworld.HelloReply.deserializeBinary(buffer));
	}

	SetMessage(message: string): HelloReply {
		if ((this.underlying.getMessage() === "") && (message === undefined || message === null)) {
			return this;
		} else if (this.underlying.getMessage() === message) {
			return this;
		} else {
			let instance = HelloReply.fromHelloReply(this.underlying.cloneMessage());
			instance.underlying.setMessage(message);
			return instance;
		}
	}

	get Message(): string {
		return this.underlying.getMessage();
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}
}

export type OneoffieldEnum = helloworld.OneoffieldEnum;

export class TestMessage implements MessageType {
	private underlying: helloworld.TestMessage;

	constructor() {
		this.underlying = new helloworld.TestMessage();
	}

	static OneoffieldCase = helloworld.TestMessage.OneoffieldCase;

	static fromTestMessage(u: helloworld.TestMessage): TestMessage {
		let ihr = new TestMessage();
		ihr.underlying = u.cloneMessage();
		return ihr;
	}

	static Deserialize(buffer: Uint8Array): TestMessage {
		return TestMessage.fromTestMessage(helloworld.TestMessage.deserializeBinary(buffer));
	}

	SetStringField(name: string): TestMessage {
		if ((this.underlying.getStringfield() === "") && (name === undefined || name === null)) {
			return this;
		} else if (this.underlying.getStringfield() === name) {
			return this;
		} else {
			let instance = TestMessage.fromTestMessage(this.underlying.cloneMessage());
			instance.underlying.setStringfield(name);
			return instance;
		}
	}

	get StringField(): string {
		return this.underlying.getStringfield();
	}

	SetUint64Field(num: Uint64): TestMessage {
		if (num === undefined || num === null) {
			num = Uint64(0);
		}

		if (this.underlying.getUint64field() === num.toNumber()) {
			return this;
		} else {
			let instance = TestMessage.fromTestMessage(this.underlying.cloneMessage());
			instance.underlying.setUint64field(num.toNumber());
			return instance;
		}
	}

	get Uint64Field(): Uint64 {
		return Uint64(this.underlying.getUint64field());
	}

	SetOneofUint64Field(num: Uint64): TestMessage {
		/* This logic is to ensure that if underlying value has not changed
		 * return the same instance */
		if (num === undefined || num === null) {
			return this.ClearOneofUint64Field();
		} else {
			if (this.underlying.getOneofuint64field() === num.toNumber()) {
				return this;
			} else {
				let instance = TestMessage.fromTestMessage(this.underlying.cloneMessage());
				instance.underlying.setOneofuint64field(num.toNumber());
				return instance;
			}
		}
	}

	/* This logic handles the clearing of field in the oneof case */
	ClearOneofUint64Field(): TestMessage {
		if (this.underlying.getOneofuint64field() === undefined || this.underlying.getOneofuint64field() === null) {
			return this;
		} else {
			let instance = TestMessage.fromTestMessage(this.underlying.cloneMessage());
			instance.underlying.clearOneofuint64field();
			return instance;
		}
	}

	get OneofUint64Field(): Uint64 {
		let mobile = this.underlying.getOneofuint64field();
		return (mobile === undefined ? undefined : Uint64(mobile));
	}

	SetOneofStringField(e: string): TestMessage {
		if (e === undefined || e === null) {
			return this.ClearOneofStringField();
		} else {
			if (this.underlying.getOneofstringfield() === e) {
				return this;
			} else {
				let instance = TestMessage.fromTestMessage(this.underlying.cloneMessage());
				instance.underlying.setOneofstringfield(e);
				return instance;
			}
		}
	}

	ClearOneofStringField(): TestMessage {
		if (this.underlying.getOneofstringfield() === undefined || this.underlying.getOneofstringfield() === null) {
			return this;
		} else {
			let instance = TestMessage.fromTestMessage(this.underlying.cloneMessage());
			instance.underlying.clearOneofstringfield();
			return instance;
		}
	}

	get OneofStringField(): string {
		let email = this.underlying.getOneofstringfield();
		return (email === undefined ? undefined : email);
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}

	GetOneofFieldCase(): OneoffieldEnum {
		return this.underlying.getOneoffieldCase();
	}
}

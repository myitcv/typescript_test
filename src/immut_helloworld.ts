import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";
import {ImmDate} from "./immDate";

export class HelloRequest {
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
		let instance = HelloRequest.fromHelloRequest(this.underlying.cloneMessage());
		instance.underlying.setName(name);
		return instance;
	}

	get Name(): string {
		return this.underlying.getName();
	}

	SetAge(age: Uint64): HelloRequest {
		let instance = HelloRequest.fromHelloRequest(this.underlying.cloneMessage());
		instance.underlying.setAge(age.toNumber());
		return instance;
	}

	get Age(): Uint64 {
		return Uint64(this.underlying.getAge());
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}

	SetDob(dob: ImmDate): HelloRequest {
		let instance = HelloRequest.fromHelloRequest(this.underlying.cloneMessage());
		instance.underlying.setDob(ToInstant(dob));
		return instance;
	}

	get Dob(): ImmDate {
		return ToImmDate(this.underlying.getDob());
	}
}

export class HelloReply {
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
		let instance = HelloReply.fromHelloReply(this.underlying.cloneMessage());
		instance.underlying.setMessage(message);
		return instance;
	}

	get Message(): string {
		return this.underlying.getMessage();
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}
}

export function ToInstant(d: ImmDate): helloworld.Instant {
	let t = d.GetTime();
	let res = new helloworld.Instant();
	res.setSeconds(Math.floor(t / 1000));	// Seconds
	res.setMicroseconds((t - Math.floor(t / 1000) * 1000) * 1000);	// (t - Math.floor(t / 1000) * 1000) -- MS * 1000 -- MiS
	return res;
}

export function ToImmDate(d: helloworld.Instant): ImmDate {
	let res = ImmDate.NewImmDate(d.getSeconds() * 1000);
	res = res.SetMilliseconds(d.getMicroseconds() / 1000);
	return res;
}

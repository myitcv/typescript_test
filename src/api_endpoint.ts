import {HelloRequest, HelloReply} from "./immut_helloworld";

export class Backend {
	private address: string
	constructor(address: string) {
		this.address = address;
	}

	SayHello(request: HelloRequest): Promise<HelloReply> {
		let req = new Request(`${this.address}/SayHello`, { method: "POST", body: request.Serialize(), mode: "cors" });
		return fetch(req)
			.then((response) => response.arrayBuffer())
			.then((response) => {
				var arr = new Uint8Array(response);
				var y = HelloReply.Deserialize(arr);
				return y;
			});
	}
}

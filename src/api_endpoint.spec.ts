import {Backend} from "./api_endpoint";
import {HelloRequest, HelloReply} from "./immut_helloworld";

describe("Backend", () => {

	it("should create a new backend instance without error", () => {
		expect(() => new Backend("/base/fixtures")).not.toThrow();
	});

	describe("with a Backend instance", () => {

		let backend: Backend;

		beforeEach(() => {
			backend = new Backend("/base/fixtures");
		});

		describe("SayHello", () => {
			it("should accept a hellorequest object respond back with a Promise which resolves to a helloreply", (done: () => void) => {
				let req = new HelloRequest();
				req = req.SetName("modelogiq");
				backend.SayHello(req).then((res) => {
					expect(res instanceof HelloReply).toBe(true);
					expect(res.Message).toBe("OK hello world!");
					done();
				}).catch((e) => {
					expect(e).not.toBeDefined();
					done();
				});
			});
		});
	});
});

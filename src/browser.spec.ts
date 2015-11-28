import {Run} from "./browser";

describe("Browser", () => {
	let container: HTMLElement;

	beforeEach(() => {
		container = document.createElement("div");
	});

	it("should work", () => {
		expect(() => Run(container)).not.toThrow();
	});
});

/// <reference path="testing.d.ts" />

import {Run} from "./app";

describe("App", () => {
	it("should work", () => {
		expect(() => Run()).not.toThrow();
	});
});
import {helloworld} from "./helloworld";

describe("Instant", () => {
	describe("with a constructor", () => {
		it("should create a new instance without throwing error", () => {
			expect(() => new helloworld.Instant()).not.toThrow();
		});

		describe("with a new instance", () => {
			let instant: helloworld.Instant;
			beforeEach(() => {
				instant = new helloworld.Instant();
			});

			it("should have known starting state", () => {
				expect(instant.getSeconds()).not.toBeUndefined();
				expect(instant.getSeconds()).toEqual(0);
				expect(instant.getMicroseconds()).not.toBeUndefined();
				expect(instant.getMicroseconds()).toEqual(0);
			});

			describe("with a know starting state", () => {
				describe("Seconds", () => {
					it("should set to default value when undefined is passed", () => {
						instant.setSeconds(undefined);
						expect(instant.getSeconds()).toEqual(0);
					});
				});

				describe("Seconds", () => {
					it("should set to default value when undefined is passed", () => {
						instant.setMicroseconds(undefined);
						expect(instant.getMicroseconds()).toEqual(0);
					});
				});
			});
		});
	});
});

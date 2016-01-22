import {helloworld} from "./helloworld";

describe("TestMessage", () => {
	describe("with a constructor", () => {
		it("should create a new instance without throwing error", () => {
			expect(() => new helloworld.TestMessage()).not.toThrow();
		});

		describe("with a new instance", () => {

			let person: helloworld.TestMessage;

			beforeEach(() => {
				person = new helloworld.TestMessage();
			});

			it("should have a known starting state", () => {
				expect(person.getStringfield()).toEqual("");
				expect(person.getOneofstringfield()).not.toBeDefined();
				expect(person.getOneofuint64field()).not.toBeDefined();
				expect(person.getOneoffieldCase()).toEqual(helloworld.TestMessage.OneoffieldCase.ONEOFFIELD_NOT_SET);
			});

			describe("with a known starting state", () => {
				describe("setStringfield", () => {
					it("should set to default value when undefined is passed", () => {
						person.setStringfield(undefined);
						expect(person.getStringfield()).toEqual("");
					});
					it("should set default value when null is passed", () => {
						person.setStringfield(null);
						expect(person.getStringfield()).toEqual("");
					});
				});
				describe("setOneofstringfield", () => {
					it("should set to default value when undefined is passed", () => {
						person.setOneofstringfield(undefined);
						expect(person.getOneofstringfield()).not.toBeDefined();
					});
					xit("should set to default value when null is passed", () => {
						person.setOneofstringfield(null);
						expect(person.getOneofstringfield()).not.toBeDefined();
					});
				});
				describe("setOneofuint64field", () => {
					it("should set to undefined when undefined is passed", () => {
						person.setOneofuint64field(undefined);
						expect(person.getOneofuint64field()).not.toBeDefined();
					});
					xit("should set to undefined when null is passed", () => {
						person.setOneofuint64field(null);
						expect(person.getOneofuint64field()).not.toBeDefined();
					});
				});
				describe("getStringfield", () => {
					it("should return empty string when no value is set", () => {
						expect(person.getStringfield()).toEqual("");
					});
					it("should return string when it is set", () => {
						person.setStringfield("modelogiq");
						expect(person.getStringfield()).toEqual("modelogiq");
					});
				});
				describe("getOneofstringfield", () => {
					it("should return undefined when value is not set", () => {
						expect(person.getOneofstringfield()).not.toBeDefined();
					});
					it("should return string when value is set", () => {
						person.setOneofstringfield("frontend@modelogiq.com");
						expect(person.getOneofstringfield()).toEqual("frontend@modelogiq.com");
					});
				});
				describe("getOneofuint64field", () => {
					it("should return undefined when value is not set", () => {
						expect(person.getOneofuint64field()).not.toBeDefined();
					});
					it("should return number when value is set", () => {
						person.setOneofuint64field(9000000000);
						expect(person.getOneofuint64field()).toEqual(9000000000);
					});
				});
			});
		});
	});
});

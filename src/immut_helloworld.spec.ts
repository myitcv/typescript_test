import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";
import {TestMessage, PROTOBUF_DEFAULT_NORMAL_STRING, PROTOBUF_DEFAULT_NORMAL_UINT64, PROTOBUF_DEFAULT_ONEOF_STRING, PROTOBUF_DEFAULT_ONEOF_UINT64, MessageType} from "./immut_helloworld";

function verifyWithSerialization<T extends MessageType>(src: T, dest: string): boolean {
	let buf = src.Serialize();
	let array = new Uint8Array(buf);
	let base64str = btoa(<string>array.reduce((i, v) => i + String.fromCharCode(v), ""));
	return base64str === dest;
}

function GetSerializedObjectFromBase64(base64: string): Uint8Array {
	let asciiStr = atob(base64);
	let asciiArray = asciiStr.split("");
	let arrayBuffer = new ArrayBuffer(asciiArray.length);
	let uint8Array = new Uint8Array(arrayBuffer);
	uint8Array.set(asciiArray.map((c) => c.charCodeAt(0)));
	return uint8Array;
}

describe("TestMessage", () => {

	let serializedJSON: { [k: string]: string };
	let GetBase64String = (key: string): string => {
		return serializedJSON[key];
	};

	const stringValue = "modelogiq";
	const uint64Value = Uint64(9999999999);

	beforeAll((done: () => void) => {
		fetch("/base/fixtures/serialized.json")
			.then((res) => res.json())
			.then((json) => {
				serializedJSON = json;
				done();
			})
			.catch((err) => {
				console.log(err);
				done();
			});
	});

	describe("New TestMessage", () => {
		it("should not throw error when a new instance is created", () => {
			expect(() => new TestMessage()).not.toThrow();
		});
	});

	describe("with a new TestMessage instance", () => {

		let testMessage: TestMessage;

		beforeEach(() => {
			testMessage = new TestMessage();
		});

		describe("with a known starting state", () => {

			it("should have appropriate values set", () => {
				expect(testMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				expect(testMessage.OneofStringField).not.toBeDefined();
				expect(testMessage.OneofUint64Field).not.toBeDefined(); // This would throw error since it is trying to convert undefined into a Uint64
				expect(testMessage.GetOneofFieldCase()).toEqual(TestMessage.OneoffieldCase.ONEOFFIELD_NOT_SET);
			});

			describe("String Field", () => {
				it("should return the original instance when undefined value is passed", () => {
					let modifiedTestMessage = testMessage.SetStringField(undefined);
					expect(modifiedTestMessage).toBe(testMessage);
					expect(testMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(modifiedTestMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
					expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
				});

				it("should return the original instance when null value is passed", () => {
					let modifiedTestMessage = testMessage.SetStringField(null);
					expect(modifiedTestMessage).toBe(testMessage);
					expect(testMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(modifiedTestMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
					expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
				});

				it("should not mutate the original instance when new value is set", () => {
					let modifiedTestMessage = testMessage.SetStringField(stringValue);
					expect(modifiedTestMessage).not.toBe(testMessage);
					expect(testMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
				});

				it("should set name correctly and return a new instance when a valid value is passed", () => {
					let modifiedTestMessage = testMessage.SetStringField(stringValue);
					expect(modifiedTestMessage.StringField).toEqual(stringValue);
					expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithString"))).toBe(true);
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedTestMessage = testMessage.SetStringField(stringValue);
					let modifiedAgainTestMessage = modifiedTestMessage.SetStringField(stringValue);
					expect(modifiedAgainTestMessage).toBe(modifiedTestMessage);
					expect(modifiedAgainTestMessage.StringField).toEqual(stringValue);
					expect(modifiedTestMessage.StringField).toEqual(stringValue);
					expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithString"))).toBe(true);
					expect(verifyWithSerialization(modifiedAgainTestMessage, GetBase64String("testMessageWithString"))).toBe(true);
				});
			});

			describe("Uint64 Field", () => {
				it("should return the original instance when undefined value is passed", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(undefined);
					expect(modifiedTestMessage).toBe(testMessage);
					expect(testMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(modifiedTestMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
					expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
				});

				it("should return the original instance when null value is passed", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(null);
					expect(modifiedTestMessage).toBe(testMessage);
					expect(testMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(modifiedTestMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
					expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
				});

				it("should not mutate the original instance when new value is set", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(uint64Value);
					expect(modifiedTestMessage).not.toBe(testMessage);
					expect(testMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
				});

				it("should set name correctly and return a new instance when a valid value is passed", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(uint64Value);
					expect(modifiedTestMessage.Uint64Field).toEqual(uint64Value);
					expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithUint64"))).toBe(true);
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(uint64Value);
					let modifiedAgainTestMessage = modifiedTestMessage.SetUint64Field(uint64Value);
					expect(modifiedAgainTestMessage).toBe(modifiedTestMessage);
					expect(modifiedAgainTestMessage.Uint64Field).toEqual(uint64Value);
					expect(modifiedTestMessage.Uint64Field).toEqual(uint64Value);
					expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithUint64"))).toBe(true);
					expect(verifyWithSerialization(modifiedAgainTestMessage, GetBase64String("testMessageWithUint64"))).toBe(true);
				});
			});

			describe("Oneof Field", () => {

				describe("String", () => {

					describe("SetOneofStringField & OneofStringField", () => {
						it("should return the original instance when undefined value is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField(undefined);
							expect(modifiedTestMessage).toBe(testMessage);
							expect(testMessage.OneofStringField).toEqual(PROTOBUF_DEFAULT_ONEOF_STRING);
							expect(modifiedTestMessage.OneofStringField).toEqual(PROTOBUF_DEFAULT_ONEOF_STRING);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
						});

						it("should return the original instance when null value is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField(undefined);
							expect(modifiedTestMessage).toBe(testMessage);
							expect(testMessage.OneofStringField).toEqual(PROTOBUF_DEFAULT_ONEOF_STRING);
							expect(modifiedTestMessage.OneofStringField).toEqual(PROTOBUF_DEFAULT_ONEOF_STRING);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
						});

						it("should not mutate the original instance when new value is set", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField(stringValue);
							expect(modifiedTestMessage).not.toBe(testMessage);
							expect(testMessage.OneofStringField).toEqual(PROTOBUF_DEFAULT_ONEOF_STRING);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithOneofString"))).toBe(true);
						});

						it("should set the OneofStringField value and return a new instance when a valid entry is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField(stringValue);
							expect(modifiedTestMessage.OneofStringField).toEqual(stringValue);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithOneofString"))).toBe(true);
						});

						it("should return the same instance when value is not modified", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField(stringValue);
							let modifiedAgainTestMessage = modifiedTestMessage.SetOneofStringField(stringValue);
							expect(modifiedAgainTestMessage).toBe(modifiedTestMessage);
							expect(modifiedAgainTestMessage.OneofStringField).toEqual(stringValue);
							expect(modifiedTestMessage.OneofStringField).toEqual(stringValue);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithOneofString"))).toBe(true);
							expect(verifyWithSerialization(modifiedAgainTestMessage, GetBase64String("testMessageWithOneofString"))).toBe(true);
						});
					});

					describe("ClearOneofStringField", () => {
						it("should clear a previously set value and return a new instance", () => {
							testMessage = testMessage.SetOneofStringField(stringValue);
							let modifiedTestMessage = testMessage.ClearOneofStringField();
							expect(modifiedTestMessage).not.toBe(testMessage);
							expect(modifiedTestMessage.OneofStringField).toBeUndefined();
							expect(verifyWithSerialization(testMessage, GetBase64String("testMessageWithOneofString"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
						});

						it("should not mutate the original instance when value is cleared", () => {
							testMessage = testMessage.SetOneofStringField(stringValue);
							testMessage.ClearOneofStringField();
							expect(testMessage.OneofStringField).toBe(stringValue);
							expect(verifyWithSerialization(testMessage, GetBase64String("testMessageWithOneofString"))).toBe(true);
						});
					});
				});

				describe("Uint64", () => {

					describe("SetOneofUint64Field & OneofUint64Field", () => {
						it("should return the original instance when undefined value is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(undefined);
							expect(modifiedTestMessage).toBe(testMessage);
							expect(testMessage.OneofUint64Field).toEqual(PROTOBUF_DEFAULT_ONEOF_UINT64);
							expect(modifiedTestMessage.OneofUint64Field).toEqual(PROTOBUF_DEFAULT_ONEOF_UINT64);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
						});

						it("should return the original instance when null value is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(null);
							expect(modifiedTestMessage).toBe(testMessage);
							expect(testMessage.OneofUint64Field).toEqual(PROTOBUF_DEFAULT_ONEOF_UINT64);
							expect(modifiedTestMessage.OneofUint64Field).toEqual(PROTOBUF_DEFAULT_ONEOF_UINT64);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
						});

						it("should not mutate the original instance when new value is set", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(uint64Value);
							expect(modifiedTestMessage).not.toBe(testMessage);
							expect(testMessage.OneofUint64Field).toEqual(PROTOBUF_DEFAULT_ONEOF_UINT64);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithOneofUint64"))).toBe(true);
						});

						it("should set the OneofUint64Field value and return a new instance when a valid entry is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(uint64Value);
							expect(modifiedTestMessage.OneofUint64Field).toEqual(uint64Value);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithOneofUint64"))).toBe(true);
						});

						it("should return the same instance when value is not modified", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(uint64Value);
							let modifiedAgainTestMessage = modifiedTestMessage.SetOneofUint64Field(uint64Value);
							expect(modifiedAgainTestMessage).toBe(modifiedTestMessage);
							expect(modifiedAgainTestMessage.OneofUint64Field).toEqual(uint64Value);
							expect(modifiedTestMessage.OneofUint64Field).toEqual(uint64Value);
							expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("testMessageWithOneofUint64"))).toBe(true);
							expect(verifyWithSerialization(modifiedAgainTestMessage, GetBase64String("testMessageWithOneofUint64"))).toBe(true);
						});
					});

					describe("ClearOneofUint64Field", () => {
						it("should clear a previously set value in a new instance", () => {
							testMessage = testMessage.SetOneofUint64Field(uint64Value);
							let modifiedTestMessage = testMessage.ClearOneofUint64Field();
							expect(modifiedTestMessage).not.toBe(testMessage);
							expect(modifiedTestMessage.OneofUint64Field).toBeUndefined();
							expect(verifyWithSerialization(testMessage, GetBase64String("testMessageWithOneofUint64"))).toBe(true);
							expect(verifyWithSerialization(modifiedTestMessage, GetBase64String("emptyTestMessage"))).toBe(true);
						});

						it("should not mutate the original instance when value is cleared", () => {
							testMessage = testMessage.SetOneofUint64Field(uint64Value);
							testMessage.ClearOneofUint64Field();
							expect(testMessage.OneofUint64Field).toEqual(uint64Value);
							expect(verifyWithSerialization(testMessage, GetBase64String("testMessageWithOneofUint64"))).toBe(true);
						});
					});
				});

				describe("GetOneofFieldCase", () => {
					it("should call the underlying getContactCase function", () => {
						let testMessageWithOneofString = testMessage.SetOneofStringField(stringValue);
						expect(testMessageWithOneofString.GetOneofFieldCase()).toEqual(TestMessage.OneoffieldCase.ONEOFSTRINGFIELD);
						let testMessageWithOneofUint64 = testMessage.SetOneofUint64Field(uint64Value);
						expect(testMessageWithOneofUint64.GetOneofFieldCase()).toEqual(TestMessage.OneoffieldCase.ONEOFUINT64FIELD);
					});
				});
			});

			describe("Serialize", () => {
				it("should call the underlying serialize function", () => {
					let testMessageWithString = testMessage.SetStringField(stringValue);
					let testMessageWithUint64 = testMessage.SetUint64Field(uint64Value);
					let testMessageWithOneofString = testMessage.SetOneofStringField(stringValue);
					let testMessageWithOneofUint64 = testMessage.SetOneofUint64Field(uint64Value);
					expect(verifyWithSerialization(testMessage, GetBase64String("emptyTestMessage"))).toBe(true);
					expect(verifyWithSerialization(testMessageWithString, GetBase64String("testMessageWithString"))).toBe(true);
					expect(verifyWithSerialization(testMessageWithUint64, GetBase64String("testMessageWithUint64"))).toBe(true);
					expect(verifyWithSerialization(testMessageWithOneofString, GetBase64String("testMessageWithOneofString"))).toBe(true);
					expect(verifyWithSerialization(testMessageWithOneofUint64, GetBase64String("testMessageWithOneofUint64"))).toBe(true);
				});
			});

			describe("Deserialize", () => {
				it("should call the deserialize function", () => {
					spyOn(helloworld.TestMessage, "deserializeBinary").and.callThrough();
					let serializedSource = new Uint8Array((new TestMessage()).Serialize());
					TestMessage.Deserialize(serializedSource);
					expect(helloworld.TestMessage.deserializeBinary).toHaveBeenCalled();
					let testMessageWithString = GetSerializedObjectFromBase64(GetBase64String("testMessageWithString"));
					let testMessageWithUint64 = GetSerializedObjectFromBase64(GetBase64String("testMessageWithUint64"));
					let testMessageWithOneofString = GetSerializedObjectFromBase64(GetBase64String("testMessageWithOneofString"));
					let testMessageWithOneofUint64 = GetSerializedObjectFromBase64(GetBase64String("testMessageWithOneofUint64"));
					expect(TestMessage.Deserialize(testMessageWithString).StringField).toEqual(stringValue);
					expect(TestMessage.Deserialize(testMessageWithUint64).Uint64Field).toEqual(uint64Value);
					expect(TestMessage.Deserialize(testMessageWithOneofString).OneofStringField).toEqual(stringValue);
					expect(TestMessage.Deserialize(testMessageWithOneofUint64).OneofUint64Field).toEqual(uint64Value);
				});
			});
		});
	});
});

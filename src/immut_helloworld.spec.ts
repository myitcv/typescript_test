import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";
import {HelloRequest, TestMessage, HelloReply, PROTOBUF_DEFAULT_NORMAL_STRING, PROTOBUF_DEFAULT_NORMAL_UINT64, PROTOBUF_DEFAULT_ONEOF_STRING, PROTOBUF_DEFAULT_ONEOF_UINT64, MessageType} from "./immut_helloworld";

function verifyWithSerialization<T extends MessageType>(src: T, dest: string): boolean {
	let buf = src.Serialize();
	let array = new Uint8Array(buf);
	let base64str = btoa(<string>array.reduce((i, v) => i + String.fromCharCode(v), ""));
	return base64str === dest;
}

describe("TestMessage", () => {

	let serializedJSON: {[k: string]: string};
	const stringValue = "modelogiq";
	const unint64Value = Uint64(999999999);

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
					expect(verifyWithSerialization(testMessage, serializedJSON["emptyTestMessage"])).toBe(true);
					expect(verifyWithSerialization(modifiedTestMessage, serializedJSON["emptyTestMessage"])).toBe(true);
				});

				it("should return the original instance when null value is passed", () => {
					let modifiedTestMessage = testMessage.SetStringField(null);
					expect(modifiedTestMessage).toBe(testMessage);
					expect(testMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(modifiedTestMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(verifyWithSerialization(testMessage, serializedJSON["emptyTestMessage"])).toBe(true);
					expect(verifyWithSerialization(modifiedTestMessage, serializedJSON["emptyTestMessage"])).toBe(true);
				});

				it("should not mutate the original instance when new value is set", () => {
					let modifiedTestMessage = testMessage.SetStringField("modelogiq");
					expect(modifiedTestMessage).not.toBe(testMessage);
					expect(testMessage.StringField).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(verifyWithSerialization(testMessage, serializedJSON["emptyTestMessage"])).toBe(true);
				});

				it("should set name correctly and return a new instance when a valid value is passed", () => {
					let modifiedTestMessage = testMessage.SetStringField("modelogiq");
					expect(modifiedTestMessage.StringField).toEqual("modelogiq");
					expect(verifyWithSerialization(modifiedTestMessage, serializedJSON["testMessageWithString"])).toBe(true);
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedTestMessage = testMessage.SetStringField("modelogiq");
					let modifiedAgainTestMessage = modifiedTestMessage.SetStringField("modelogiq");
					expect(modifiedAgainTestMessage).toBe(modifiedTestMessage);
					expect(modifiedAgainTestMessage.StringField).toEqual("modelogiq");
					expect(modifiedTestMessage.StringField).toEqual("modelogiq");
										expect(verifyWithSerialization(modifiedTestMessage, serializedJSON["testMessageWithString"])).toBe(true);
					expect(verifyWithSerialization(modifiedAgainTestMessage, serializedJSON["testMessageWithString"])).toBe(true);
				});
			});

			describe("Uint64 Field", () => {
				it("should return the original instance when undefined value is passed", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(undefined);
					expect(modifiedTestMessage).toBe(testMessage);
					expect(testMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(modifiedTestMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(verifyWithSerialization(testMessage, serializedJSON["emptyTestMessage"])).toBe(true);
					expect(verifyWithSerialization(modifiedTestMessage, serializedJSON["emptyTestMessage"])).toBe(true);
				});

				it("should return the original instance when null value is passed", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(null);
					expect(modifiedTestMessage).toBe(testMessage);
					expect(testMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(modifiedTestMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(verifyWithSerialization(testMessage, serializedJSON["emptyTestMessage"])).toBe(true);
					expect(verifyWithSerialization(modifiedTestMessage, serializedJSON["emptyTestMessage"])).toBe(true);
				});

				it("should not mutate the original instance when new value is set", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(Uint64(9999999999));
					expect(modifiedTestMessage).not.toBe(testMessage);
					expect(testMessage.Uint64Field).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
					expect(verifyWithSerialization(testMessage, serializedJSON["emptyTestMessage"])).toBe(true);
				});

				it("should set name correctly and return a new instance when a valid value is passed", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(Uint64(9999999999));
					expect(modifiedTestMessage.Uint64Field).toEqual(Uint64(9999999999));
					expect(verifyWithSerialization(modifiedTestMessage, serializedJSON["testMessageWithUint64"])).toBe(true);
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedTestMessage = testMessage.SetUint64Field(Uint64(9999999999));
					let modifiedAgainTestMessage = modifiedTestMessage.SetUint64Field(Uint64(9999999999));
					expect(modifiedAgainTestMessage).toBe(modifiedTestMessage);
					expect(modifiedAgainTestMessage.Uint64Field).toEqual(Uint64(9999999999));
					expect(modifiedTestMessage.Uint64Field).toEqual(Uint64(9999999999));
					expect(verifyWithSerialization(modifiedTestMessage, serializedJSON["testMessageWithUint64"])).toBe(true);
					expect(verifyWithSerialization(modifiedAgainTestMessage, serializedJSON["testMessageWithUint64"])).toBe(true);
				});
			});

			describe("Oneof Field", () => {

				describe("String", () => {

					describe("SetOneofStringField & OneofStringField", () => {
						it("should return the original instance when undefined value is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField(undefined);
							expect(modifiedTestMessage).toBe(testMessage);
							expect(testMessage.OneofStringField).toEqual(undefined);
							expect(modifiedTestMessage.OneofStringField).toEqual(undefined);
						});

						it("should return the original instance when null value is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField(undefined);
							expect(modifiedTestMessage).toBe(testMessage);
							expect(testMessage.OneofStringField).toEqual(undefined);
							expect(modifiedTestMessage.OneofStringField).toEqual(undefined);
						});

						it("should not mutate the original instance when new value is set", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField("frontend@modelogiq.com");
							expect(modifiedTestMessage).not.toBe(testMessage);
							expect(testMessage.OneofStringField).toEqual(undefined);
						});

						it("should set the OneofStringField value and return a new instance when a valid entry is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField("frontend@modelogiq.com");
							expect(modifiedTestMessage.OneofStringField).toEqual("frontend@modelogiq.com");
						});

						it("should return the same instance when value is not modified", () => {
							let modifiedTestMessage = testMessage.SetOneofStringField("frontend@modelogiq.com");
							let modifiedAgainTestMessage = modifiedTestMessage.SetOneofStringField("frontend@modelogiq.com");
							expect(modifiedAgainTestMessage).toBe(modifiedTestMessage);
							expect(modifiedAgainTestMessage.OneofStringField).toEqual("frontend@modelogiq.com");
							expect(modifiedTestMessage.OneofStringField).toEqual("frontend@modelogiq.com");
						});
					});

					describe("ClearOneofStringField", () => {
						it("should clear a previously set value in a new instance", () => {
							testMessage = testMessage.SetOneofStringField("frontend@modelogiq.com");
							let modifiedTestMessage = testMessage.ClearOneofStringField();
							expect(modifiedTestMessage).not.toBe(testMessage);
							expect(modifiedTestMessage.OneofStringField).toBeUndefined();
						});

						it("should not mutate the original instance when value is cleared", () => {
							testMessage = testMessage.SetOneofStringField("frontend@modelogiq.com");
							expect(testMessage.OneofStringField).toBe("frontend@modelogiq.com");
						});
					});
				});

				describe("Uint64", () => {

					describe("SetOneofUint64Field & OneofUint64Field", () => {
						it("should return the original instance when undefined value is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(undefined);
							expect(modifiedTestMessage).toBe(testMessage);
							expect(testMessage.OneofUint64Field).toEqual(undefined);
							expect(modifiedTestMessage.OneofUint64Field).toEqual(undefined);
						});

						it("should return the original instance when null value is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(null);
							expect(modifiedTestMessage).toBe(testMessage);
							expect(testMessage.OneofUint64Field).toEqual(undefined);
							expect(modifiedTestMessage.OneofUint64Field).toEqual(undefined);
						});

						it("should not mutate the original instance when new value is set", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(Uint64(9000000000));
							expect(modifiedTestMessage).not.toBe(testMessage);
							expect(testMessage.OneofUint64Field).toEqual(undefined);
						});

						it("should set the OneofUint64Field value and return a new instance when a valid entry is passed", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(Uint64(9000000000));
							expect(modifiedTestMessage.OneofUint64Field).toEqual(Uint64(9000000000));
						});

						it("should return the same instance when value is not modified", () => {
							let modifiedTestMessage = testMessage.SetOneofUint64Field(Uint64(9000000000));
							let modifiedAgainTestMessage = modifiedTestMessage.SetOneofUint64Field(Uint64(9000000000));
							expect(modifiedAgainTestMessage).toBe(modifiedTestMessage);
							expect(modifiedAgainTestMessage.OneofUint64Field).toEqual(Uint64(9000000000));
							expect(modifiedTestMessage.OneofUint64Field).toEqual(Uint64(9000000000));
						});
					});

					describe("ClearOneofUint64Field", () => {
						it("should clear a previously set value in a new instance", () => {
							testMessage = testMessage.SetOneofUint64Field(Uint64(9000000000));
							let modifiedTestMessage = testMessage.ClearOneofUint64Field();
							expect(modifiedTestMessage).not.toBe(testMessage);
							expect(modifiedTestMessage.OneofUint64Field).toBeUndefined();
						});

						it("should not mutate the original instance when value is cleared", () => {
							testMessage = testMessage.SetOneofUint64Field(Uint64(9000000000));
							testMessage.ClearOneofUint64Field();
							expect(testMessage.OneofUint64Field).toEqual(Uint64(9000000000));
						});
					});
				});

				describe("GetOneofFieldCase", () => {
					it("should call the underlying getContactCase function", () => {
						spyOn(testMessage["underlying"], "getOneoffieldCase");
						testMessage.GetOneofFieldCase();
						expect(testMessage["underlying"].getOneoffieldCase).toHaveBeenCalled();
					});
				});
			});

			describe("Serialize", () => {
				it("should call the underlying serialize function", () => {
					spyOn(testMessage["underlying"], "serializeBinary");
					testMessage.Serialize();
					expect(testMessage["underlying"].serializeBinary).toHaveBeenCalled();
				});
			});

			describe("Deserialize", () => {
				it("should call the deserialize function", () => {
					spyOn(helloworld.TestMessage, "deserializeBinary").and.callThrough();
					let serializedSource = new Uint8Array((new TestMessage()).Serialize());
					TestMessage.Deserialize(serializedSource);
					expect(helloworld["TestMessage"].deserializeBinary).toHaveBeenCalled();
				});
			});
		});
	});
});

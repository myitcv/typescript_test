import {ImmDate} from "./immDate";
import {helloworld} from "./helloworld";
import {ToInstant, ToImmDate} from "./immut_helloworld";

describe("ImmDateToInstant ", () => {
	let immDate: ImmDate;
	let instant: helloworld.Instant;
	let dateObj: number;
	beforeEach(() => {
		dateObj = new Date().valueOf();
	});

	it("should be able transform to Instant from ImmDate", () => {
		immDate = ImmDate.NewImmDate(dateObj);
		instant = ToInstant(immDate);
		expect(instant).not.toBeUndefined();
		let x = new Date(instant.getSeconds() * 1000);
		x.setMilliseconds(instant.getMicroseconds() / 1000);
		expect(x.getSeconds() === immDate.GetSeconds()).toBe(true);
	});

	it("should be able to transform to ImmDate from Instant", () => {
		immDate = ImmDate.NewImmDate(dateObj);
		instant = ToInstant(immDate);
		immDate = ToImmDate(instant);
		expect(immDate).not.toBeUndefined();
		let x = new Date(instant.getSeconds() * 1000);
		x.setMilliseconds(instant.getMicroseconds() / 1000);
		expect(x.getSeconds() === immDate.GetSeconds()).toBe(true);
		expect(x.getDate() === immDate.GetDate()).toBe(true);
	});
	describe("ToImmDate ", () => {
		/*
			Mon Feb  1 19:06:34 IST 2016
			1454333794.115091000
			Seconds.NanoSeconds
		*/
		it("with know state of Instant", () => {
			instant = new helloworld.Instant();
			expect(instant).not.toBeUndefined();

			instant.setSeconds(1454333794);
			instant.setMicroseconds(115091000 / 1000);

			immDate = ToImmDate(instant);
			expect(immDate).not.toBeUndefined();

			instant.setMicroseconds(1150910000 / 1000);
			let immDate2 = ToImmDate(instant);
			expect((immDate.GetSeconds() + 1) === immDate2.GetSeconds()).toBeTruthy();
		});
	});
});

describe("Instant to ImmDate conversion ", () => {
	it("with no value or with only seconds or microseconds value", () => {
		let instant = new helloworld.Instant();
		expect(instant).not.toBeUndefined();
		expect(instant.getMicroseconds() === 0).toBe(true);
		expect(instant.getSeconds() === 0).toBe(true);

		instant.setSeconds(1454333794);
		expect(instant.getMicroseconds() === 0).toBe(true);

		let immDate = ToImmDate(instant);
		expect(immDate).not.toBeUndefined();

		expect(immDate.GetDate() === 1).toBe(true);
		expect(immDate.GetMilliseconds() === 0).toBe(true);

		instant.setMicroseconds(115091000 / 1000);
		immDate = ToImmDate(instant);

		expect(immDate.GetDate() === 1).toBe(true);
		expect(immDate.GetMilliseconds() === 115).toBe(true);

		let instant2 = new helloworld.Instant();
		instant2.setMicroseconds(115091000 / 1000);
		expect(instant2.getSeconds() === 0).toBe(true);

		immDate = ToImmDate(instant2);
		expect(immDate.GetFullYear() === 1970).toBe(true);

		let instant3 = new helloworld.Instant();
		immDate = ToImmDate(instant3);
		expect(instant3).not.toBeUndefined();
	});

	it("with negative values", () => {
		let instant = new helloworld.Instant();
		instant.setSeconds(-1454333794);
		expect(instant).not.toBeUndefined();
		let immDate = ToImmDate(instant);
		expect(immDate.GetFullYear() <= 1970).toBe(true);
		console.log(immDate.ToString());
	});

	it("with NaN values", () => {
		let instant = new helloworld.Instant();
		expect(instant).not.toBeUndefined();
		instant.setSeconds(NaN);
		instant.setMicroseconds(NaN);
		expect(isNaN(instant.getSeconds())).toBe(true);
		expect(isNaN(instant.getMicroseconds())).toBe(true);
	});
});

describe("Serialize and Deserialize ", () => {
	it("should be able to Serialize ", () => {
		let instant = new helloworld.Instant();
		instant.setSeconds(1454333794);
		expect(helloworld.Instant.deserializeBinary(instant.serializeBinary())).not.toBeUndefined();
		instant.setMicroseconds(115091000 / 1000);
		expect(helloworld.Instant.deserializeBinary(instant.serializeBinary())).not.toBeUndefined();
	});

	it("Should be equivalent after deserializing and then serializing ", () => {
		let instant = new helloworld.Instant();
		instant.setSeconds(1454333794);
		instant.setMicroseconds(115091000 / 1000);
		let immDate = ToImmDate(instant);
		let instant2 = helloworld.Instant.deserializeBinary(instant.serializeBinary());
		let immDate2 = ToImmDate(instant2);
		expect(immDate.GetTime() === immDate2.GetTime()).toBe(true);
	});
});

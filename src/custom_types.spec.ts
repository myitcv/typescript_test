import {Int32, Uint32, Int64, Uint64} from "./custom_types";

describe("Custom Types", () => {

	let int32_valid = 1048576; // Math.pow(2,20)
	let int32_invalid = 2147483648; // Math.pow(2,31)
	let int64_valid = 1125899906842624; // Math.pow(2,50)
	let int64_invalid = 9223372036854776000; // Math.pow(2,63)

	let uint32_valid = 2147483648; // Math.pow(2,31)
	let uint32_invalid = 8589934592; // Math.pow(2,33)
	let uint64_valid = 9223372036854776000; // Math.pow(2,63)
	let uint64_invalid = 36893488147419103000; // Math.pow(2,65)

	describe("Int32", () => {
		it("should throw error when a null value is passed", () => {
			expect(() => Int32(null)).toThrow();
		});
		it("should throw error when an undefined value is passed", () => {
			expect(() => Int32(undefined)).toThrow();
		});
		it("should throw error when a +ve number greater than 32bits is passed", () => {
			expect(() => Int32(int32_invalid)).toThrow();
		});
		it("should throw error when a -ve number greater than 32bits is passed", () => {
			expect(() => Int32(-(int32_invalid + 1))).toThrow();
		});
		it("should not throw error when a +ve number lesser than 32bits is passed", () => {
			expect(() => Int32(int32_valid)).not.toThrow();
		});
		it("should not throw error when a -ve number lesser than 32bits is passed", () => {
			expect(() => Int32(-int32_valid)).not.toThrow();
		});

		it("should convert to a number", () => {
			let i = Int32(int32_valid);
			expect(i.toNumber()).toEqual(int32_valid);
		});

		it("should parse a valid 32bit string representation of number", () => {
			let s = int32_valid.toString();
			expect(() => Int32.Parse(s)).not.toThrow();
		});

		it("should throw error when an invalid 32bit string representation of number is passed", () => {
			let s = int32_invalid.toString();
			expect(() => Int32.Parse(s)).toThrow();
		});
	});

	describe("Int64", () => {
		it("should throw error when a null value is passed", () => {
			expect(() => Int64(null)).toThrow();
		});

		it("should throw error when an undefined value is passed", () => {
			expect(() => Int64(undefined)).toThrow();
		});

		it("should throw error when a +ve number greater than 64bits is passed", () => {
			expect(() => Int64(int64_invalid)).toThrow();
		});

		it("should throw error when a -ve number greater than 64bits is passed", () => {
			expect(() => Int64(-(int64_invalid + 2000))).toThrow();
		});

		it("should not throw error when a +ve number lesser than 64bits is passed", () => {
			expect(() => Int64(int64_valid)).not.toThrow();
		});

		it("should not throw error when a -ve number lesser than 64bits is passed", () => {
			expect(() => Int64(-int64_valid)).not.toThrow();
		});

		it("should convert to a number", () => {
			let i = Int64(int64_valid);
			expect(i.toNumber()).toEqual(int64_valid);
		});

		it("should parse a valid 64bit string representation of number", () => {
			let s = int64_valid.toString();
			expect(() => Int64.Parse(s)).not.toThrow();
		});

		it("should throw error when an invalid 64bit string representation of number is passed", () => {
			let s = int64_invalid.toString();
			expect(() => Int64.Parse(s)).toThrow();
		});
	});

	describe("Uint32", () => {
		it("should throw error when a null value is passed", () => {
			expect(() => Uint32(null)).toThrow();
		});

		it("should throw error when an undefined value is passed", () => {
			expect(() => Uint32(undefined)).toThrow();
		});

		it("should throw error when a number greater than 32bits is passed", () => {
			expect(() => Uint32(uint32_invalid)).toThrow();
		});

		it("should not throw error when a number lesser than 32bits is passed", () => {
			expect(() => Uint32(uint32_valid)).not.toThrow();
		});

		it("should convert to a number", () => {
			let i = Uint32(uint32_valid);
			expect(i.toNumber()).toEqual(uint32_valid);
		});

		it("should parse a valid 64bit string representation of number", () => {
			let s = uint32_valid.toString();
			expect(() => Uint32.Parse(s)).not.toThrow();
		});

		it("should throw error when an invalid 64bit string representation of number is passed", () => {
			let s = uint32_invalid.toString();
			expect(() => Uint32.Parse(s)).toThrow();
		});
	});

	describe("Uint64", () => {
		it("should throw error when a null value is passed", () => {
			expect(() => Uint64(null)).toThrow();
		});

		it("should throw error when an undefined value is passed", () => {
			expect(() => Uint64(undefined)).toThrow();
		});

		it("should throw error when a number greater than 64bits is passed", () => {
			expect(() => Uint64(uint64_invalid)).toThrow();
		});

		it("should not throw error when a number lesser than 64bits is passed", () => {
			expect(() => Uint64(uint64_valid)).not.toThrow();
		});

		it("should convert to a number", () => {
			let i = Uint64(uint64_valid);
			expect(i.toNumber()).toEqual(uint64_valid);
		});

		it("should parse a valid 64bit string representation of number", () => {
			let s = uint64_valid.toString();
			expect(() => Uint64.Parse(s)).not.toThrow();
		});

		it("should throw error when an invalid 64bit string representation of number is passed", () => {
			let s = uint64_invalid.toString();
			expect(() => Uint64.Parse(s)).toThrow();
		});
	});
});

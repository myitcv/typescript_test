"use strict";

var custom_types = {};

(function(namespace){
	var MAX_32_NUM = Math.pow(2, 31);
	var MAX_64_NUM = Math.pow(2, 63);
	var MAX_U32_NUM = Math.pow(2, 32);
	var MAX_U64_NUM = Math.pow(2, 64);

	var Int32 = function(n) {
		if(this instanceof Int32) {
			if (n === null || n === undefined) {
				throw new Error("Int32 cannot be null or undefined");
			}
			if(isNaN(n)) {
				throw new Error("Int32 cannot be NaN");
			}
			if (n >= MAX_32_NUM || n < (-MAX_32_NUM)) {
				throw new Error("integer out of range (32bit)");
			}
			else {
				this.val = n;
			}
		} else {
			return new Int32(n);
		}
	};
	Int32.Parse = function(str) {
		try {
			var n = parseInt(str);
			if(isNaN(n)) {
				throw new Error("Unable to Parse the given string");
			} else {
				return new Int32(n);
			}
		} catch(e) {
			throw e;
		}
	};
	Int32.prototype.toNumber = function() {
		return this.val;
	};

	var Int64 = function(n) {
		if(this instanceof Int64) {
			if (n === null || n === undefined) {
				throw new Error("Int64 cannot be null or undefined");
			}
			if(isNaN(n)) {
				throw new Error("Int64 cannot be NaN");
			}
			if (n >= MAX_64_NUM || n < (-MAX_64_NUM)) {
				throw new Error("integer out of range (64bit)");
			}
			else {
				this.val = n;
			}
		} else {
			return new Int64(n);
		}
	};
	Int64.Parse = function(str) {
		try {
			var n = parseInt(str);
			return new Int64(n);
		} catch(e) {
			throw e;
		}
	};
	Int64.prototype.toNumber = function() {
		return this.val;
	};

	var Uint32 = function(n) {
		if(this instanceof Uint32) {
			if (n === null || n === undefined) {
				throw new Error("Uint32 cannot be null or undefined");
			}
			if(isNaN(n)) {
				throw new Error("Uint32 cannot be NaN");
			}
			if (Math.abs(n) >= MAX_U32_NUM) {
				throw new Error("integer out of range (32bit)");
			}
			else {
				this.val = Math.abs(n);
			}
		} else {
			return new Uint32(n);
		}
	};
	Uint32.Parse = function(str) {
		try {
			var n = parseInt(str, 10);
			return new Uint32(n);
		} catch(e) {
			throw e;
		}
	};
	Uint32.prototype.toNumber = function() {
		return this.val;
	};

	var Uint64 = function(n) {
		if(this instanceof Uint64) {
			if (n === null || n === undefined) {
				throw new Error("Uint64 cannot be null or undefined");
			}
			if(isNaN(n)) {
				throw new Error("Uint64 cannot be NaN");
			}
			if (Math.abs(n) >= MAX_U64_NUM) {
				throw new Error("integer out of range (64bit)");
			}
			else {
				this.val = Math.abs(n);
			}
		} else {
			return new Uint64(n);
		}
	};
	Uint64.Parse = function(str) {
		try {
			var n = parseInt(str);
			return new Uint64(n);
		} catch(e) {
			throw e;
		}
	};
	Uint64.prototype.toNumber = function() {
		return this.val;
	};

	namespace["Int32"] = Int32;
	namespace["Int64"] = Int64;
	namespace["Uint32"] = Uint32;
	namespace["Uint64"] = Uint64;
	return namespace;
}(custom_types));

module.exports = custom_types;

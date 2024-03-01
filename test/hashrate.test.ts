import { describe, it, expect } from "bun:test";
import { Hashrate } from "../src";

describe("parsing from number", () => {
	it("should parse 1 to 1.0 H/s", () => {
		const hashrate = Hashrate.parse(1);
		expect(hashrate.toString()).toBe("1.0 H/s");
	});

	it("should parse 1000 to 1.0 KH/s", () => {
		const hashrate = Hashrate.parse(1000);
		expect(hashrate.toString()).toBe("1.0 KH/s");
	});

	it("should parse 1000000 to 1.0 MH/s", () => {
		const hashrate = Hashrate.parse(1000000);
		expect(hashrate.toString()).toBe("1.0 MH/s");
	});

	it("should parse 1000000000 to 1.0 GH/s", () => {
		const hashrate = Hashrate.parse(1000000000);
		expect(hashrate.toString()).toBe("1.0 GH/s");
	});

	it("should parse 1000000000000 to 1.0 TH/s", () => {
		const hashrate = Hashrate.parse(1000000000000);
		expect(hashrate.toString()).toBe("1.0 TH/s");
	});

	it("should parse 1000000000000000 to 1.0 PH/s", () => {
		const hashrate = Hashrate.parse(1000000000000000);
		expect(hashrate.toString()).toBe("1.0 PH/s");
	});

	it("should parse 1000000000000000000 to 1.0 EH/s", () => {
		const hashrate = Hashrate.parse(1000000000000000000);
		expect(hashrate.toString()).toBe("1.0 EH/s");
	});

	it("should parse 1 to 1", () => {
		const value = 1;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1000 to 1000", () => {
		const value = 1000;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1000000 to 1000000", () => {
		const value = 1000000;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1000000000 to 1000000000", () => {
		const value = 1000000000;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1000000000000 to 1000000000000", () => {
		const value = 1000000000000;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1000000000000000 to 1000000000000000", () => {
		const value = 1000000000000000;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1000000000000000000 to 1000000000000000000", () => {
		const value = 1000000000000000000;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1.5 to 1.5 H/s", () => {
		const hashrate = Hashrate.parse(1.5);
		expect(hashrate.toString()).toBe("1.5 H/s");
	});

	it("should parse 1.5 to 1.5", () => {
		const value = 1.5;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1500 to 1500", () => {
		const value = 1500;
		const hashrate = Hashrate.parse(value);
		expect(hashrate.toNumber()).toBe(value);
	});

	it("should parse 1.5e6 to 1.5 MH/s", () => {
		const hashrate = Hashrate.parse(1.5e6);
		expect(hashrate.toString()).toBe("1.5 MH/s");
	});
});

describe("parsing from string", () => {
	it('should parse "1 H/s" to 1.0 H/s', () => {
		const hashrate = Hashrate.parse("1 H/s");
		expect(hashrate.toString()).toBe("1.0 H/s");
	});

	it('should parse "1 KH/s" to 1.0 KH/s', () => {
		const hashrate = Hashrate.parse("1 KH/s");
		expect(hashrate.toString()).toBe("1.0 KH/s");
	});

	it('should parse "1 MH/s" to 1.0 MH/s', () => {
		const hashrate = Hashrate.parse("1 MH/s");
		expect(hashrate.toString()).toBe("1.0 MH/s");
	});

	it('should parse "1 GH/s" to 1.0 GH/s', () => {
		const hashrate = Hashrate.parse("1 GH/s");
		expect(hashrate.toString()).toBe("1.0 GH/s");
	});

	it('should parse "1 TH/s" to 1.0 TH/s', () => {
		const hashrate = Hashrate.parse("1 TH/s");
		expect(hashrate.toString()).toBe("1.0 TH/s");
	});

	it('should parse "1 PH/s" to 1.0 PH/s', () => {
		const hashrate = Hashrate.parse("1 PH/s");
		expect(hashrate.toString()).toBe("1.0 PH/s");
	});

	it('should parse "1 EH/s" to 1.0 EH/s', () => {
		const hashrate = Hashrate.parse("1 EH/s");
		expect(hashrate.toString()).toBe("1.0 EH/s");
	});

	it('should parse "1 H/s" to 1', () => {
		const hashrate = Hashrate.parse("1 H/s");
		expect(hashrate.toNumber()).toBe(1);
	});

	it('should parse "1 KH/s" to 1000', () => {
		const hashrate = Hashrate.parse("1 KH/s");
		expect(hashrate.toNumber()).toBe(1000);
	});

	it('should parse "1 MH/s" to 1000000', () => {
		const hashrate = Hashrate.parse("1 MH/s");
		expect(hashrate.toNumber()).toBe(1000000);
	});

	it('should parse "1 GH/s" to 1000000000', () => {
		const hashrate = Hashrate.parse("1 GH/s");
		expect(hashrate.toNumber()).toBe(1000000000);
	});

	it('should parse "1 TH/s" to 1000000000000', () => {
		const hashrate = Hashrate.parse("1 TH/s");
		expect(hashrate.toNumber()).toBe(1000000000000);
	});

	it('should parse "1 PH/s" to 1000000000000000', () => {
		const hashrate = Hashrate.parse("1 PH/s");
		expect(hashrate.toNumber()).toBe(1000000000000000);
	});

	it('should parse "1 EH/s" to 1000000000000000000', () => {
		const hashrate = Hashrate.parse("1 EH/s");
		expect(hashrate.toNumber()).toBe(1000000000000000000);
	});

	it('should parse "1.5 H/s" to 1.5 H/s', () => {
		const hashrate = Hashrate.parse("1.5 H/s");
		expect(hashrate.toString()).toBe("1.5 H/s");
	});

	it('should parse "1.5 H/s" to 1.5', () => {
		const hashrate = Hashrate.parse("1.5 H/s");
		expect(hashrate.toNumber()).toBe(1.5);
	});

	it('should parse "1.5 KH/s" to 1500', () => {
		const hashrate = Hashrate.parse("1.5 KH/s");
		expect(hashrate.toNumber()).toBe(1500);
	});

	it('should parse "52.7K" to 52700', () => {
		const hashrate = Hashrate.parse("52.7K");
		expect(hashrate.toNumber()).toBe(52700);
	});

	it('should parse "426G" to 426000000000', () => {
		const hashrate = Hashrate.parse("426G");
		expect(hashrate.toNumber()).toBe(426000000000);
	});
});

describe("error handling", () => {
	it("should throw error for negative input", () => {
		expect(() => Hashrate.parse(-1)).toThrow("Input value must be positive");
	});

	it("should throw error for invalid string format", () => {
		expect(() => Hashrate.parse("invalid")).toThrow(
			"Invalid input string format",
		);
	});
});

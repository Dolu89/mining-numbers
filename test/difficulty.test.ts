import { describe, it, expect } from "bun:test";
import { Difficulty } from "../src";

describe("parsing from number", () => {
	it("should parse 1 to 1.00", () => {
		const difficulty = Difficulty.parse(1);
		expect(difficulty.toString()).toBe("1.00");
	});

	it("should parse 1000 to 1.00k", () => {
		const difficulty = Difficulty.parse(1000);
		expect(difficulty.toString()).toBe("1.00k");
	});

	it("should parse 1000000 to 1.00M", () => {
		const difficulty = Difficulty.parse(1000000);
		expect(difficulty.toString()).toBe("1.00M");
	});

	it("should parse 1000000000 to 1.00B", () => {
		const difficulty = Difficulty.parse(1000000000);
		expect(difficulty.toString()).toBe("1.00B");
	});

	it("should parse 1000000000000 to 1.00T", () => {
		const difficulty = Difficulty.parse(1000000000000);
		expect(difficulty.toString()).toBe("1.00T");
	});

	it("should parse 1000000000000000 to 1.00P", () => {
		const difficulty = Difficulty.parse(1000000000000000);
		expect(difficulty.toString()).toBe("1.00P");
	});

	it("should parse 1000000000000000000 to 1.00E", () => {
		const difficulty = Difficulty.parse(1000000000000000000);
		expect(difficulty.toString()).toBe("1.00E");
	});

	it("should parse 1 to 1", () => {
		const value = 1;
		const difficulty = Difficulty.parse(value);
		expect(difficulty.toNumber()).toBe(value);
	});

	it("should parse 1000 to 1000", () => {
		const value = 1000;
		const difficulty = Difficulty.parse(value);
		expect(difficulty.toNumber()).toBe(value);
	});

	it("should parse 1000000 to 1000000", () => {
		const value = 1000000;
		const difficulty = Difficulty.parse(value);
		expect(difficulty.toNumber()).toBe(value);
	});

	it("should parse 1000000000 to 1000000000", () => {
		const value = 1000000000;
		const difficulty = Difficulty.parse(value);
		expect(difficulty.toNumber()).toBe(value);
	});

	it("should parse 1500 to 1500", () => {
		const value = 1500;
		const difficulty = Difficulty.parse(value);
		expect(difficulty.toNumber()).toBe(value);
	});

	it("should parse 1500.45 to 1500.45", () => {
		const value = 1500.45;
		const difficulty = Difficulty.parse(value);
		expect(difficulty.toNumber()).toBe(value);
	});

	it("should parse 1500.45 to 1.50k", () => {
		const value = 1500.45;
		const difficulty = Difficulty.parse(value);
		expect(difficulty.toString()).toBe("1.50k");
	});
});

describe("parsing from string", () => {
	it("should parse 1 to 1.00", () => {
		const difficulty = Difficulty.parse("1");
		expect(difficulty.toString()).toBe("1.00");
	});

	it("should parse 1k to 1.00k", () => {
		const difficulty = Difficulty.parse("1k");
		expect(difficulty.toString()).toBe("1.00k");
	});

	it("should parse 1.00k to 1.00k", () => {
		const difficulty = Difficulty.parse("1.00k");
		expect(difficulty.toString()).toBe("1.00k");
	});

	it("should parse 1M to 1.00M", () => {
		const difficulty = Difficulty.parse("1M");
		expect(difficulty.toString()).toBe("1.00M");
	});

	it("should parse 1B to 1.00B", () => {
		const difficulty = Difficulty.parse("1B");
		expect(difficulty.toString()).toBe("1.00B");
	});

	it("should parse 1T to 1.00T", () => {
		const difficulty = Difficulty.parse("1T");
		expect(difficulty.toString()).toBe("1.00T");
	});

	it("should parse 1P to 1.00P", () => {
		const difficulty = Difficulty.parse("1P");
		expect(difficulty.toString()).toBe("1.00P");
	});

	it("should parse 1E to 1.00E", () => {
		const difficulty = Difficulty.parse("1E");
		expect(difficulty.toString()).toBe("1.00E");
	});

	it("should parse 1k to 1000", () => {
		const difficulty = Difficulty.parse("1k");
		expect(difficulty.toNumber()).toBe(1000);
	});

	it("should parse 1M to 1000000", () => {
		const difficulty = Difficulty.parse("1M");
		expect(difficulty.toNumber()).toBe(1000000);
	});

	it("should parse 1B to 1000000000", () => {
		const difficulty = Difficulty.parse("1B");
		expect(difficulty.toNumber()).toBe(1000000000);
	});

	it("should parse 1T to 1000000000000", () => {
		const difficulty = Difficulty.parse("1T");
		expect(difficulty.toNumber()).toBe(1000000000000);
	});

	it("should parse 1P to 1000000000000000", () => {
		const difficulty = Difficulty.parse("1P");
		expect(difficulty.toNumber()).toBe(1000000000000000);
	});

	it("should parse 1E to 1000000000000000000", () => {
		const difficulty = Difficulty.parse("1E");
		expect(difficulty.toNumber()).toBe(1000000000000000000);
	});

	it("should parse 1.5 to 1.50", () => {
		const difficulty = Difficulty.parse("1.5");
		expect(difficulty.toString()).toBe("1.50");
	});

	it("should parse 1.5k to 1500", () => {
		const difficulty = Difficulty.parse("1.5k");
		expect(difficulty.toNumber()).toBe(1500);
	});

	it("should parse 1.5M to 1500000", () => {
		const difficulty = Difficulty.parse("1.5M");
		expect(difficulty.toNumber()).toBe(1500000);
	});
});

describe("error handling", () => {
	it("should throw error for negative input", () => {
		expect(() => Difficulty.parse(-1)).toThrow("Input value must be positive");
	});

	it("should throw error for invalid string format", () => {
		expect(() => Difficulty.parse("invalid")).toThrow(
			"Invalid input string format",
		);
	});
});

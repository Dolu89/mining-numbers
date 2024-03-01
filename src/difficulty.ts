import { Base } from "./base";

export type DifficultyUnit = "" | "k" | "M" | "B" | "T" | "P" | "E";
const UNITS: DifficultyUnit[] = ["", "k", "M", "B", "T", "P", "E"];

export class Difficulty extends Base {
	private static regex = /^(\d+(?:\.\d+)?)\s*([A-Za-z]*)$/;

	constructor(
		protected value: number,
		protected unit: DifficultyUnit,
	) {
		super(value, unit);
	}

	static parse(input: number | string): Difficulty {
		const base = Base.parse(input, Difficulty.regex, UNITS);
		return new Difficulty(base.getValue, base.getUnit as DifficultyUnit);
	}

	toString(): string {
		return `${this.value.toFixed(2)}${this.unit}`;
	}

	toNumber(): number {
		return super.toNumber(UNITS);
	}
}

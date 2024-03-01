import { Base } from "./base";

export type HashrateUnit = "H" | "KH" | "MH" | "GH" | "TH" | "PH" | "EH";
const UNITS: HashrateUnit[] = ["H", "KH", "MH", "GH", "TH", "PH", "EH"];

export class Hashrate extends Base {
	private static regex = /^(\d+(?:\.\d+)?)\s*([A-Za-z]*)\/s$/;

	constructor(
		public value: number,
		public unit: HashrateUnit,
	) {
		super(value, unit);
	}

	static parse(input: number | string): Hashrate {
		const base = Base.parse(input, Hashrate.regex, UNITS);
		return new Hashrate(base.getValue, base.getUnit as HashrateUnit);
	}

	toString(): string {
		return `${this.value.toFixed(1)} ${this.unit}/s`;
	}

	toNumber(): number {
		return super.toNumber(UNITS);
	}
}

export class Base {
	constructor(
		protected value: number,
		protected unit: string,
	) {
		this.value = value;
		this.unit = unit;
	}

	public get getValue(): number {
		return this.value;
	}

	public get getUnit(): string {
		return this.unit;
	}

	static parse(input: number | string, regex: RegExp, units: string[]): Base {
		if (typeof input === "number") {
			if (input < 0) {
				throw new Error("Input value must be positive");
			}

			let index = 0;

			let calculatedInput = input;
			while (calculatedInput >= 1000 && index < units.length - 1) {
				calculatedInput /= 1000;
				index++;
			}

			return new Base(calculatedInput, units[index]);
		}

		if (typeof input === "string") {
			const match = input.match(regex);

			if (!match) {
				throw new Error("Invalid input string format");
			}

			const value = Number(match[1]);
			const unit = match[2];

			if (!units.includes(unit)) {
				throw new Error(`Invalid unit: ${unit}`);
			}

			return new Base(value, unit);
		}

		throw new Error("Invalid input type");
	}

	toNumber(units: string[]): number {
		return this.value * 1000 ** units.indexOf(this.unit);
	}
}

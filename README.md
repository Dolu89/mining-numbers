# Mining numbers

[![CI](https://github.com/Dolu89/mining-numbers/actions/workflows/ci.yml/badge.svg)](https://github.com/Dolu89/mining-numbers/actions/workflows/ci.yml)

Convert mining number from number/string to number/string

## Install

```bash
npm install mining-numbers
```

## Usage

```typescript
import { Hashrate, Difficulty } from 'mining-numbers'

// Supported units 'H/s', 'KH/s', 'MH/s', 'GH/s', 'TH/s', 'PH/s', 'EH/s'
Hashrate.parse(1500).toString() // 1.5 KH/s
Hashrate.parse('1.5 KH/s').toNumber() // 1500
Hashrate.parse('1.5KH/s').toNumber() // 1500

// Supported units 'k', 'M', 'B', 'T', 'P', 'E'
Difficulty.parse(1500).toString() // 1.50K
Difficulty.parse('1.50k').toNumber() // 1500
Difficulty.parse('1.50 k').toNumber() // 1500
```

## Contribue
```bash
# install dependencies
bun install

# test the app
bun test

# build the app, available under dist
bun run build
```


## License

MIT

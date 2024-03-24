# Dusk Stylelint rules

Stylelint config used by [Dusk](https://dusk.network/) web apps.

## Installation

```bash
npm i -D @dusk-network/stylelint-config
```

## Usage

```javascript
// ...

extends: [
    "@dusk-network/stylelint-config"
]

// ...
```

# npm scripts

- `npm run check` performs all checks
- `npm run format` performs the Prettier formatting check
- `npm run format:fix` reformats according to the Prettier rules
- `npm run lint` performs the linting check

# himanshuchandola-cli

Interactive CLI portfolio for Himanshu Chandola - A modern terminal experience built with TypeScript.

[![npm version](https://img.shields.io/npm/v/himanshuchandola.svg)](https://www.npmjs.com/package/himanshuchandola)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)

## Overview

A TypeScript-based interactive CLI tool that serves as a terminal portfolio. Features animated ASCII banner, terminal card display, and interactive menu navigation to explore my digital presence.

## Installation

### Run without installing

```bash
npx himanshuchandola
```

### Install globally

```bash
npm install -g himanshuchandola
```

Then run:

```bash
himanshuchandola
```

## Usage

```bash
himanshuchandola [options]
```

### Options

- `--open=<destination>` - Open a destination directly (portfolio, github, linkedin, peerlist, twitter)
- `--no-anim` - Skip the animated banner
- `-h, --help` - Show help message

### Examples

```bash
# Open GitHub directly
himanshuchandola --open=github

# Skip animation
himanshuchandola --no-anim

# Show help
himanshuchandola --help
```

## Features

- Animated ASCII banner with color cycling
- Beautiful terminal card with personal information
- Interactive numbered menu for navigation
- CLI flags for direct navigation and animation control
- Graceful fallbacks for non-TTY environments
- TypeScript with strict mode
- Comprehensive test coverage
- Automated versioning and publishing with semantic-release

## Tech Stack

- **TypeScript** - Type-safe development with strict mode
- **tsup** - Fast TypeScript bundler
- **Biome** - Fast linter and formatter
- **Vitest** - Unit testing framework
- **Inquirer** - Interactive command-line prompts
- **Chalk** - Terminal string styling
- **Boxen** - Terminal boxes
- **Figlet** - ASCII art text
- **Ora** - Elegant terminal spinners
- **Semantic Release** - Automated versioning and npm publishing

## Development

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Setup

```bash
# Clone the repository
git clone https://github.com/himanshuchandola/himanshuchandola-cli.git
cd himanshuchandola-cli

# Install dependencies
bun install

# Run in development mode
bun run dev

# Build
bun run build

# Test
bun test

# Lint
bun run lint
```

### Scripts

- `bun run dev` - Watch mode with auto-rebuild
- `bun run build` - Build for production
- `bun test` - Run tests
- `bun run type-check` - TypeScript type checking
- `bun run lint` - Lint code with Biome
- `bun run format` - Format code with Biome

## Project Structure

```
himanshuchandola-cli/
├── src/
│   ├── index.ts              # CLI entry point
│   ├── config/
│   │   └── personal.ts       # Personal data configuration
│   ├── modules/
│   │   ├── banner.ts         # Animated ASCII banner
│   │   ├── menu.ts           # Interactive menu system
│   │   └── card.ts           # Terminal card display
│   ├── utils/
│   │   ├── flags.ts          # CLI flag parsing
│   │   ├── loader.ts         # Dynamic module loading
│   │   └── open.ts           # Safe URL opening
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── tests/                    # Test files
├── docs/                     # Documentation
├── .github/workflows/        # CI/CD workflows
└── package.json
```

## Documentation

- [Development Guide](./docs/DEVELOPMENT.md)
- [Testing Guide](./docs/TESTING.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

## Automated Publishing

This project uses semantic-release for automated versioning and npm publishing. Commits following the [Conventional Commits](https://www.conventionalcommits.org/) specification will trigger automated releases.

### Commit Message Format

- `feat(scope): message` - Minor version bump
- `fix(scope): message` - Patch version bump
- `feat(scope)!: message` - Major version bump (breaking change)
- `docs(scope): message` - No version bump
- `chore(scope): message` - No version bump

Valid scopes: cli, config, deps, ci, types, utils, banner, menu, card, release

## License

This project is [MIT](./LICENSE) licensed.

## Author

**Himanshu Chandola**

- Portfolio: [himanshuchandola.dev](https://himanshuchandola.dev)
- GitHub: [@himanshuchandola](https://github.com/himanshuchandola)
- LinkedIn: [himanshuchandola](https://www.linkedin.com/in/himanshuchandola/)
- Twitter: [@himanshuistaken](https://x.com/himanshuistaken)

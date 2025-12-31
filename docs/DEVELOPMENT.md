# Development Guide

## Getting Started

This guide covers the development workflow for himanshuchandola-cli.

## Prerequisites

- [Bun](https://bun.sh/) v1.3.4 or higher (recommended)
- Node.js 18+ (alternative to Bun)
- Git

## Initial Setup

```bash
# Clone the repository
git clone https://github.com/himanshuchandola/himanshuchandola-cli.git
cd himanshuchandola-cli

# Install dependencies
bun install

# Build the project
bun run build
```

## Development Workflow

### Running Locally

```bash
# Development mode with watch
bun run dev

# Build and run
bun run build
./dist/index.js

# Test with flags
./dist/index.js --help
./dist/index.js --no-anim
./dist/index.js --open=github
```

### Code Quality

```bash
# Type checking
bun run type-check

# Linting
bun run lint

# Auto-fix linting issues
bun run lint:fix

# Format code
bun run format
```

### Testing

```bash
# Run all tests
bun test

# Watch mode
bun run test:watch

# Coverage report
bun run test:coverage
```

## Project Architecture

### Module Structure

- **src/index.ts** - Main entry point with environment detection and orchestration
- **src/config/** - Configuration files (personal data)
- **src/modules/** - Core feature modules (banner, card, menu)
- **src/utils/** - Utility functions (flags, loader, open)
- **src/types/** - TypeScript type definitions

### Key Design Patterns

1. **Modular Architecture** - Each feature is isolated in its own module
2. **Dynamic Loading** - Modules are loaded on-demand for faster startup
3. **Type Safety** - Strict TypeScript with comprehensive type definitions
4. **Error Handling** - Graceful fallbacks for all error scenarios

## Build Process

The project uses tsup for building:

```bash
# Build configuration in tsup.config.ts
- Entry: src/index.ts
- Format: ESM
- Target: Node 18
- Output: dist/index.js
```

## Git Workflow

### Commit Message Format

Follow Conventional Commits specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc.)
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Maintenance tasks

**Scopes:**
- cli: CLI entry point
- config: Configuration files
- deps: Dependencies
- ci: CI/CD workflows
- types: TypeScript types
- utils: Utility functions
- banner: Banner module
- menu: Menu module
- card: Card module
- release: Release configuration

### Git Hooks

Husky is configured with the following hooks:

- **pre-commit** - Runs linting and formatting
- **commit-msg** - Validates commit message format

## Troubleshooting

### Common Issues

**Issue: Module not found errors**
```bash
# Clean install
rm -rf node_modules bun.lockb
bun install
```

**Issue: TypeScript errors**
```bash
# Check TypeScript configuration
bun run type-check
```

**Issue: Build fails**
```bash
# Clean build
rm -rf dist
bun run build
```

## Adding New Features

1. Create module in `src/modules/`
2. Add types in `src/types/`
3. Write tests in `tests/unit/`
4. Update documentation
5. Commit with conventional format

## Release Process

Releases are automated via semantic-release:

1. Commit changes with conventional format
2. Push to main branch
3. CI runs tests and linting
4. Semantic-release analyzes commits
5. Version is bumped automatically
6. Package is published to npm
7. GitHub release is created

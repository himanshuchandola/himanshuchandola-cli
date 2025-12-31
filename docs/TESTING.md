# Testing Guide

## Overview

This project uses Vitest for unit and integration testing with comprehensive coverage of core functionality.

## Running Tests

```bash
# Run all tests
bun test

# Watch mode
bun run test:watch

# Coverage report
bun run test:coverage
```

## Test Structure

```
tests/
├── unit/
│   ├── flags.test.ts       # CLI flag parsing tests
│   ├── config.test.ts      # Configuration validation tests
│   └── utils.test.ts       # Utility function tests
└── integration/
    └── cli.test.ts         # CLI integration tests
```

## Writing Tests

### Unit Tests

Unit tests focus on individual functions and modules:

```typescript
import { describe, it, expect } from "vitest";
import { parseFlags } from "../../src/utils/flags";

describe("parseFlags", () => {
  it("should parse help flag", () => {
    const flags = parseFlags(["--help"]);
    expect(flags.help).toBe(true);
  });
});
```

### Integration Tests

Integration tests verify the CLI works as a whole:

```typescript
import { describe, it, expect } from "vitest";

describe("CLI Integration", () => {
  it("should have dist/index.js file after build", () => {
    // Test implementation
  });
});
```

## Test Coverage

Current test coverage:

- **Flags Parsing**: 100% (8/8 tests)
- **Configuration**: 100% (9/9 tests)
- **Module Loading**: 100% (2/2 tests)
- **Integration**: 100% (2/2 tests)

**Total**: 22 tests passing

## Testing Best Practices

1. **Test Naming** - Use descriptive test names that explain what is being tested
2. **Arrange-Act-Assert** - Structure tests with clear setup, execution, and verification
3. **Isolation** - Each test should be independent and not rely on others
4. **Coverage** - Aim for high coverage but focus on meaningful tests
5. **Edge Cases** - Test both happy paths and error scenarios

## Continuous Integration

Tests run automatically on every push via GitHub Actions:

```yaml
# .github/workflows/ci.yml
- Run type checking
- Run linting
- Run tests
- Build project
```

## Debugging Tests

```bash
# Run specific test file
bun test tests/unit/flags.test.ts

# Run tests matching pattern
bun test --grep "parseFlags"

# Verbose output
bun test --reporter=verbose
```

## Adding New Tests

1. Create test file in appropriate directory
2. Import necessary functions and types
3. Write describe blocks for logical grouping
4. Add individual test cases with it()
5. Run tests to verify they pass
6. Commit with conventional format: `test(scope): add tests for feature`

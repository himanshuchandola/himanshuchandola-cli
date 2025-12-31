# Contributing Guidelines

## Welcome

Thank you for considering contributing to himanshuchandola-cli. This document outlines the process for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- Clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Environment details (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- Clear and descriptive title
- Detailed description of the proposed functionality
- Explanation of why this enhancement would be useful
- Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Add or update tests as needed
5. Ensure all tests pass
6. Update documentation
7. Commit using conventional commit format
8. Push to your fork
9. Submit a pull request

## Development Process

### Setting Up Development Environment

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/himanshuchandola-cli.git
cd himanshuchandola-cli

# Install dependencies
bun install

# Create a new branch
git checkout -b feature/your-feature-name
```

### Making Changes

1. Write code following the existing style
2. Add tests for new functionality
3. Update documentation as needed
4. Run linting and tests locally

```bash
bun run lint
bun test
bun run type-check
```

### Commit Guidelines

Follow the Conventional Commits specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Maintenance tasks

**Scopes:**
- cli, config, deps, ci, types, utils, banner, menu, card, release

**Examples:**
```
feat(menu): add new navigation option
fix(banner): resolve animation timing issue
docs(readme): update installation instructions
test(utils): add tests for flag parsing
```

### Code Style

- Use TypeScript with strict mode
- Follow existing code structure and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Testing Requirements

- All new features must include tests
- Maintain or improve test coverage
- Tests must pass before submitting PR
- Include both unit and integration tests where appropriate

## Review Process

1. Maintainer reviews the pull request
2. Feedback is provided if changes are needed
3. Once approved, PR is merged to main
4. Automated release process handles versioning and publishing

## Questions

If you have questions, feel free to:

- Open an issue for discussion
- Reach out via GitHub discussions
- Contact the maintainer directly

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

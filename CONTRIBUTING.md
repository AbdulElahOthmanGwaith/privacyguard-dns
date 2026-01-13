# Contributing to PrivacyGuard DNS

Thank you for your interest in contributing to PrivacyGuard DNS! This document provides guidelines and instructions for contributing to our project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Security](#security)

---

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [security@privacyguard.dns](mailto:security@privacyguard.dns).

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Git**: Latest version

### Setting Up Development Environment

1. **Fork the Repository**

   Visit our [GitHub repository](https://github.com/privacyguard/dns) and click the "Fork" button to create your own fork.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/PrivacyGuard-DNS.git
   cd PrivacyGuard-DNS
   ```

3. **Add Upstream Remote**

   ```bash
   git remote add upstream https://github.com/privacyguard/dns.git
   ```

4. **Install Dependencies**

   ```bash
   npm install
   ```

5. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Process

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready files |
| `npm run build:dev` | Build development files (unminified) |
| `npm test` | Run test suite with coverage |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code for linting errors |
| `npm run lint:fix` | Auto-fix linting errors |
| `npm run format` | Format code with Prettier |
| `npm run clean` | Remove build artifacts |

### Development Workflow

1. **Stay Updated**

   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Make Changes**

   Implement your feature or fix following our coding standards.

3. **Test Your Changes**

   ```bash
   npm test
   ```

4. **Lint and Format**

   ```bash
   npm run lint
   npm run format
   ```

5. **Commit Changes**

   Write clear, descriptive commit messages:

   ```
   feat: add new DNS server configuration panel
   
   - Added IPv6 support configuration
   - Implemented server status indicator
   - Updated documentation for new features
   
   Fixes #123
   ```

6. **Push Changes**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Submit Pull Request**

   Visit your fork on GitHub and click "New Pull Request".

## Coding Standards

### HTML

- Use semantic HTML5 elements
- Follow BEM naming convention for CSS classes
- Include proper ARIA attributes for accessibility
- Keep attributes in alphabetical order

### CSS

- Use CSS custom properties (variables) for theming
- Follow BEM methodology for class naming
- Use modern CSS features (Grid, Flexbox, Custom Properties)
- Mobile-first responsive design
- Use meaningful class names in English

**Example:**

```css
:root {
    --primary-color: #0f766e;
    --spacing-md: 1rem;
}

.component-name {
    display: flex;
    gap: var(--spacing-md);
}

.component-name__element {
    color: var(--primary-color);
}

.component-name--modifier {
    border: 2px solid var(--primary-color);
}
```

### JavaScript

- Use ES2022+ features
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Use async/await instead of raw Promises
- Use template literals for string interpolation
- Use destructuring for objects and arrays
- Add JSDoc comments for functions
- Handle errors with try/catch

**Example:**

```javascript
/**
 * Processes user data and returns formatted result
 * @param {Object} userData - User data object
 * @param {string} userData.name - User's name
 * @param {string} userData.email - User's email
 * @returns {Promise<Object>} Formatted user object
 */
async function processUserData({ name, email }) {
    try {
        const formatted = {
            displayName: name.trim(),
            contact: email.toLowerCase()
        };
        
        return formatted;
    } catch (error) {
        console.error('Failed to process user data:', error);
        throw error;
    }
}
```

### Git Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, etc.) |
| `refactor` | Code refactoring |
| `perf` | Performance improvements |
| `test` | Adding or modifying tests |
| `chore` | Maintenance tasks |

**Example Commit Messages:**

```
feat(auth): add user authentication system
fix(dns): resolve DNS timeout issue on Windows
docs(readme): update installation instructions
style(css): format CSS according to style guide
refactor(i18n): extract translation strings to JSON
perf(loading): improve initial page load time
test(config): add unit tests for config parser
chore(deps): update webpack to version 5
```

## Submitting Changes

### Pull Request Guidelines

1. **Title**: Use a clear, descriptive title
2. **Description**: Explain what you changed and why
3. **Screenshots**: Include screenshots for UI changes
4. **Testing**: Describe how you tested your changes
5. **Checklist**:
   - [ ] Code follows our style guidelines
   - [ ] Tests pass locally
   - [ ] No linting errors
   - [ ] Documentation updated (if applicable)
   - [ ] Commits follow conventional format

### Review Process

1. A maintainer will review your PR within 48 hours
2. You may be asked to make changes
3. Once approved, your PR will be merged

## Reporting Issues

### Before Submitting

- Search existing issues to avoid duplicates
- Check if the issue is reproducible
- Test with the latest version

### Submitting Issues

Include the following information:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: OS, browser, version
6. **Screenshots**: If applicable
7. **Logs**: Any relevant error messages

## Security

### Reporting Security Vulnerabilities

If you discover a security vulnerability, please email [security@privacyguard.dns](mailto:security@privacyguard.dns) instead of opening a public issue.

### Security Practices

- All dependencies are regularly audited
- Sensitive data is never committed
- Secrets are managed via environment variables
- HTTPS is required for all external connections

---

## Questions?

If you have questions, feel free to:

- Open a [GitHub Discussion](https://github.com/privacyguard/dns/discussions)
- Email us at [support@privacyguard.dns](mailto:support@privacyguard.dns)
- Join our community chat

Thank you for contributing to PrivacyGuard DNS! 🛡️

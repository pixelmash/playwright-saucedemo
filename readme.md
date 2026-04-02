[![Playwright Tests](https://github.com/pixelmash/playwright-saucedemo/actions/workflows/playwright.yml/badge.svg)](https://github.com/pixelmash/playwright-saucedemo/actions/workflows/playwright.yml)

# Playwright Saucedemo

Playwright test suite for saucedemo.com built with JavaScript and Page Object Model architecture.

## Tech Stack

- Playwright — browser automation and testing
- JavaScript — test language
- Node.js — runtime environment
- GitHub Actions — CI/CD

## Prerequisites

- Node.js v18 or higher
- Git

## Installation

1. Clone the repository
```bash
   git clone https://github.com/pixelmash/playwright-saucedemo
```
2. Install dependencies
```bash
   npm install
```
3. Create a `.env` file based on `.env.example` and fill in the credentials

## Running Tests

Run the full test suite:
```bash
npx playwright test
```

Run a specific file:
```bash
npx playwright test [filename].spec.js
```

Run in headed mode (visible browser):
```bash
npx playwright test --headed
```
## Project Structure

```
playwright-saucedemo/
├── .github/workflows/    # GitHub Actions CI/CD configuration
├── pages/                # Page Object Model classes
├── tests/                # Test spec files
├── testData.js           # Centralized test data
├── .env.example          # Environment variable template
└── playwright.config.js  # Playwright configuration
```

## Test Coverage

| Spec File | What's Tested |
|-----------|---------------|
| login.spec.js | Page title, successful login, failed login with error validation |
| inventory.spec.js | Product count, all four sort orders, visual regression snapshot |
| cart.spec.js | Add to cart, cart badge count, item appears in cart, remove item |
| checkout.spec.js | Navigation to checkout, form validation, complete checkout flow |
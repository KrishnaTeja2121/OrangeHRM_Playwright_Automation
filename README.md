# OrangeHRM Playwright Automation

This project contains automated UI and API tests for the OrangeHRM application using Playwright.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Contributing](#contributing)
- [Contact](#contact)

## Overview

This repository automates end-to-end and API testing for OrangeHRM using Playwright. It includes fixtures, page objects, utilities, and test suites for robust test coverage.

## Project Structure

- `pages/` - Page Object Model (POM) classes for UI automation
- `tests/ui-tests/` - UI test specs and setup files
- `tests/api-tests/` - API test specs
- `fixtures/` - Common and custom Playwright fixtures
- `utils/` - Utility functions for API and UI
- `data/` - Test data files
- `env-files/` - Environment-specific configuration files
- `playwright.config.ts` - Playwright configuration
- `playwright-report/` - Test execution reports
- `test-results/` - Raw test results

## Setup

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd OrangeHRM_Playwright_Automation
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables as needed in `env-files/`.

## Running Tests

- Run all UI and API tests:
  ```sh
  npx playwright test
  ```

- Run only UI tests:
  ```sh
  npx playwright test tests/ui-tests/
  ```

- Run only API tests:
  ```sh
  npx playwright test tests/api-tests/
  ```

- Generate and view the HTML report:
  ```sh
  npx playwright show-report
  ```

## Reporting

Test execution generates a report in the `playwright-report/` directory. Open `index.html` to view detailed results.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## Contact

For questions or support, contact the maintainer.

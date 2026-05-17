# Cypress E2E Testing - SauceDemo

## Project Overview
This repository contains a complete Cypress End-to-End (E2E) testing suite for the [SauceDemo](https://www.saucedemo.com/) web application.  
It includes:

- Task 1: UI functional tests (login, navigation, checkout form)
- Bonus / Extra Practice tests (button visibility, logout, dropdowns, screenshots)
- Reusable Cypress commands and best practices
- Screenshot evidence for successful test runs

This project is structured to follow professional Cypress practices, keeping Task 1 and Bonus tests separate.

---

## Folder Structure

```txt
cypress/
  e2e/
    task1/
      login.cy.js
      navigation.cy.js
      form.cy.js
    bonus.cy.js
  support/
    commands.js
    e2e.js
  fixtures/
Screenshots/
package.json
package-lock.json
cypress.config.js
README.md
task1/ → Required assignment test cases
bonus.cy.js → Extra practice / bonus tests
support/ → Custom commands and Cypress support
Screenshots/ → Screenshots of passing tests
Credentials for Tests
Username: standard_user
Password: secret_sauce
Installation Instructions
Open terminal in project folder:
E:
cd cypress-saucedemo-assignment
Install Node.js dependencies:
npm install

This installs Cypress locally and all required packages.

Running the Tests
Open Cypress Test Runner (Interactive Mode)
npx cypress open
Cypress UI opens.
Click the spec file you want to run:
login.cy.js → Task 1 login tests
navigation.cy.js → Task 1 navigation tests
form.cy.js → Task 1 form test
bonus.cy.js → Bonus / Extra practice tests
Run All Tests Headlessly
npx cypress run
Runs all tests in the terminal without opening the browser UI.
Run Specific Test Suites
npx cypress run --spec "cypress/e2e/task1/*.cy.js"
npx cypress run --spec "cypress/e2e/bonus.cy.js"
Screenshots
Screenshots are automatically saved during test execution in:
cypress/screenshots/
You can also refer to the evidence/ folder for assignment submission.
Bonus / Extra Practice Tests

The following tests are included for extra practice:

Verify button or element visibility using cy.get().should("be.visible")
Use cy.contains() to locate elements by text
Logout and assert login page is shown
Dropdown selection and assertion of page updates
Capture screenshots of pages using cy.screenshot()
Notes
The project is installed and run from E: drive to save C: drive space.
All tests are written using Cypress best practices, including beforeEach() hooks, reusable commands, and assertions.
Tested on Chrome and Cypress v15.15.0.
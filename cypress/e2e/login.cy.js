// login.cy.js
describe("Task 1 - Login Test Suite", () => {

  it("Login Test 1: Valid username and password", () => {
    // Step 1: Visit the website
    cy.visit("/");

    // Step 2: Enter valid username
    cy.get("#user-name")
      .should("be.visible") // Assert input is visible
      .type("standard_user"); // Type username

    // Step 3: Enter valid password
    cy.get("#password")
      .should("be.visible")
      .type("secret_sauce");

    // Step 4: Click login
    cy.get("#login-button")
      .should("be.visible")
      .click();

    // Step 5: Assert we are on Products page
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");

    // Step 6: Take screenshot
    cy.screenshot("task1-valid-login-products-page");
  });

  it("Login Test 2: Incorrect password", () => {
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("wrong_password");
    cy.get("#login-button").click();

    // Assert error message appears
    cy.get('[data-test="error"]')
      .should("be.visible")
      .should("contain.text", "Username and password do not match");
  });

  it("Login Test 3: Empty username and password", () => {
    cy.visit("/");
    cy.get("#login-button").click();

    // Assert validation message appears
    cy.get('[data-test="error"]')
      .should("be.visible")
      .should("contain.text", "Username is required");
  });

});
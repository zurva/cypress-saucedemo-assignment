// custom-command.cy.js
describe("Task 2 - Custom Command Practice", () => {

  beforeEach(() => {
    cy.visit("/"); // Visit homepage before each test
  });

  it("Login using custom command", () => {
    cy.login("standard_user", "secret_sauce"); // Reusable command

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");

    // Verify products are visible
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });

});
// alias.cy.js
describe("Task 2 - Alias Practice", () => {

  beforeEach(() => {
    cy.visit("/"); // Open SauceDemo before each test
  });

  it("Save username input as alias and reuse it", () => {
    cy.get("#user-name").as("usernameInput"); // Save as alias

    cy.get("@usernameInput").should("be.visible");
    cy.get("@usernameInput").type("standard_user");
    cy.get("@usernameInput").should("have.value", "standard_user");

    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

});
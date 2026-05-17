// navigation.cy.js
describe("Task 1 - Navigation Test Suite", () => {

  it("Navigation Test 1: Logout menu link", () => {
    cy.visit("/");

    // Login first
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Open menu and click logout
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();

    // Assert back on login page
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    cy.get("#login-button").should("be.visible");
  });

  it("Navigation Test 2: Visit Products and Cart pages in sequence", () => {
    cy.visit("/");

    // Login
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Go to Cart
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".title").should("have.text", "Your Cart");

    // Continue shopping
    cy.get("#continue-shopping").click();
    cy.url().should("include", "/inventory.html");
  });

});
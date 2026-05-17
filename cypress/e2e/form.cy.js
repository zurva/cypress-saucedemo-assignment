// form.cy.js
describe("Task 1 - Form Test Suite", () => {

  it("Form Test 1: Fill checkout form and complete order", () => {
    cy.visit("/");

    // Login
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Add a product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();

    // Checkout
    cy.get("#checkout").click();

    // Fill form
    cy.get("#first-name").type("Salar");
    cy.get("#last-name").type("Khan");
    cy.get("#postal-code").type("54000");
    cy.get("#continue").click();

    // Finish order
    cy.get("#finish").click();

    // Assert order complete
    cy.get(".complete-header").should("have.text", "Thank you for your order!");
  });

});
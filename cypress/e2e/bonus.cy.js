// bonus.cy.js
describe("Bonus / Extra Practice Tests - SauceDemo", () => {

  beforeEach(() => {
    // Login before each test
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  it("Check if the 'Add to cart' button is visible", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("be.visible");
  });

  it("Use cy.contains() to find an element by text", () => {
    cy.contains("Sauce Labs Backpack")
      .should("be.visible");
  });

  it("Click the burger menu and logout, assert login page is shown", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.get("#login-button").should("be.visible");
  });

  it("Take a screenshot of the Products page", () => {
    cy.screenshot("products-page-screenshot");
  });

  // Bonus dropdown test - SauceDemo doesn't have dropdowns on inventory page,
  // but we can simulate by sorting products using the sort dropdown
  it("Select an option from the 'Sort' dropdown", () => {
    cy.get(".product_sort_container").select("Price (low to high)");
    cy.get(".inventory_item_price").first()
      .should("have.text", "$7.99"); // The lowest price product
  });

});
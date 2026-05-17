// assertions.cy.js
describe("Task 2 - Assertion Practice", () => {

  beforeEach(() => {
    cy.visit("/"); // Open SauceDemo homepage before each test
  });

  it("Should check visibility of login button (be.visible)", () => {
    cy.get("#login-button").should("be.visible");
  });

  it("Should check text of the login logo (have.text)", () => {
    cy.get(".login_logo").should("have.text", "Swag Labs");
  });

  it("Should check placeholder attribute of username input (have.attr)", () => {
    cy.get("#user-name").should("have.attr", "placeholder", "Username");
  });

  it("Negative Assertion: error message should not exist before login", () => {
    cy.get('[data-test="error"]').should("not.exist");
  });

});
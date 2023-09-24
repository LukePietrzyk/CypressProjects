/// <reference types="cypress" />

describe("Checkbox", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });
  it("Mouse hover", () => {
    //cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});

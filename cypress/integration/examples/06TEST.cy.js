/// <reference types="cypress" />

describe("Checkbox", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });
  it("Mouse hover", () => {
    cy.get("#opentab").then((el) => {
      const url = el.prop("href");
      cy.visit(url);
      cy.origin(url, () => {
        cy.get('div.sub-menu-bar a[href="about"]').click();
      });
    });
  });
});

/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("Checkbox", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });
  it("Iframe", () => {
    cy.frameLoaded("#courses-iframe");

    cy.iframe().find('a[href="mentorship"]').eq(0).click();
    cy.wait(5000);
    cy.iframe().find('h1[class*="pricing-title"]').should("have.length", 2);
  });
});

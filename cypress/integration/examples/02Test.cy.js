/// <reference types="cypress" />
describe("Testowanie google", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });
  it("Should render valid inital number", () => {
    //
    cy.get(".products").as("productsLocator");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get("@productsLocator")
      .find(".product")
      .eq(3)
      .contains("ADD TO CART")
      .click();
    cy.get("@productsLocator")
      .find(".product")
      .each((element) => {
        const text = element.find("h4.product-name").text();

        if (text.includes("Car")) {
          cy.wrap(element).find("button").click();
        }
      });

    //Check card menu with products

    cy.get(".cart-icon").click();
    cy.get(".action-block")
      .find("button[type='button']")
      .contains("PROCEED TO CHECKOUT")
      .click();

    cy.url().should("includes", "/cart");
    cy.get("button").contains("Place Order").click();
    cy.url().should("include", "country");
  });
});

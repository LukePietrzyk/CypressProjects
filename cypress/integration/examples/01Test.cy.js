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
    cy.get(".product:visible").should("have.length", 4);
    cy.get("@productsLocator")
      .find(".product")
      .eq(3)
      .contains("ADD TO CART")
      .click();
    cy.get("@productsLocator")
      .find(".product")
      .each((element, index, list) => {
        const text = element.find("h4.product-name").text();

        if (text.includes("Car")) {
          cy.wrap(element).find("button").click();
        }
      });
    //Asertion if logo text is correct diplayed
    cy.get(".brand").should("have.text", "GREENKART");

    cy.get(".greenlogo").then((el) => {
      cy.log(el.text());
    });
  });
});

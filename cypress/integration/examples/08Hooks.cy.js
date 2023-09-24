/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";
let dane;
describe("Checkbox", () => {
  before(() => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.fixture("example.json").then((data) => {
      console.log(data);
      dane = data;
    });
  });

  it("Test", () => {
    cy.get("form div:nth-child(1) .form-control")
      .type(dane.name)
      .then((el) => {
        expect(el).to.have.value(dane.name);
      });
    cy.get("select").select(dane.gender).should("contain", dane.gender);
    cy.get(":nth-child(4) > .ng-untouched").should("have.value", dane.name);
    cy.get('form div:nth-child(1) input[class*="form-control"]').should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("#inlineRadio3").should("be.disabled");
    cy.get(":nth-child(2) > .nav-link").click();
    cy.url().should("include", "shop");

    cy.get(".card-title").each((el, index) => {
      if (el.text().includes("Blackberry")) {
        cy.get("button.btn.btn-info").eq(index).click();
      }
    });
  });
});

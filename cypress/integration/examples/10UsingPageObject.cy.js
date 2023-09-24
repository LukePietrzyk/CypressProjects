/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";
import HomePage from "./pageObjects/HomePage.cy.js";
import ProductPage from "./pageObjects/ProductFile.cy.js";
let sum = 0;
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
    const homePage = new HomePage();
    const productPage = new ProductPage();

    homePage
      .getEditBox()
      .type(dane.name)
      .then((el) => {
        expect(el).to.have.value(dane.name);
      });
    homePage.getGender().should("contain", dane.gender);
    homePage.getTwoWatDataBinding().should("have.value", dane.name);
    homePage.getEditBox2().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");
    homePage.getShopTab().click();
    productPage.siteCheckOut();

    dane.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    productPage.checkoutButton();
    cy.get("tr td:nth-child(4) strong")
      .each((el, index) => {
        let amount = el.text();
        let result1 = amount.split(" ");
        result1 = result1[1].trim();
        sum = Number(result1) + sum;
      })
      .then(() => {
        cy.log(sum);
      });
    cy.get("tr h3 strong").then((el, index) => {
      let amount1 = el.text();
      amount1 = amount1.split(" ");
      let total = Number(amount1[1].trim());
      expect(total).eq(sum);
    });
    productPage.siteCheckOut();
    productPage.checkoutButton();
    productPage.countryInput(dane.country);
    productPage.countryPopUp(dane.country);
    productPage.checkBoxButton();
    productPage.submitButton();
    productPage.alertMessageValidation();
  });
});

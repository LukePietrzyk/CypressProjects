/// <reference types="cypress" />
import shopPage from "./pageObjects/shopsite.cy";
let dane;
const shop = new shopPage();

beforeEach(() => {
  cy.fixture("shopSite.json").then((data) => {
    dane = data;
  });
});

describe("Api testing ", () => {
  it("123", () => {
    cy.loginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    shop.enterSearchBar(dane.productName);
    cy.wait(2000);
    shop.title(dane.productName);
  });
});

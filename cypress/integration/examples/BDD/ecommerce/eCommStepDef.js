/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import HomePage from "../../pageObjects/HomePage.cy.js";
import ProductPage from "../../pageObjects/ProductFile.cy.js";
let sum = 0;
let dane;
const homePage = new HomePage();
const productPage = new ProductPage();

Given("I open ecomerce page", function () {
  cy.visit("https://rahulshettyacademy.com/angularpractice/");
});
When(" I add items to cart", function () {
  homePage.getShopTab().click();
  productPage.siteCheckOut();
  dane.productName.each((element) => {
    cy.selectProduct(element);
  });
  productPage.checkoutButton();
});
When("Vlidate the totals price", () => {
  productPage.checkoutButton();
  cy.get("tr td:nth-child(4) strong")
    .each(($el) => {
      let amount = $el.text();
      let result1 = amount.split(" ");
      result1 = result1[1].trim();
      sum = Number(result1) + sum;
    })
    .then(() => {
      cy.log(sum);
    });
  cy.get("tr h3 strong").then(($el) => {
    let amount1 = $el.text();
    amount1 = amount1.split(" ");
    let total = Number(amount1[1].trim());
    expect(total).eq(sum);
  });
});

Then("Select the country submint and verify Alerty of sucefull process", () => {
  productPage.siteCheckOut();
  productPage.checkoutButton();
  productPage.countryInput(dane.country);
  productPage.countryPopUp(dane.country);
  productPage.checkBoxButton();
  productPage.submitButton();
  productPage.alertMessageValidation();
});

When("I fill the form details", () => {
  homePage.getGender().should("contain", dane.gender);
  homePage.getTwoWatDataBinding().should("have.value", dane.name);
});
Then("Validate The forms behaviours", () => {
  homePage.getEditBox2().should("have.attr", "minlength", "2");
  homePage.getEntrepreneaur().should("be.disabled");
});
Then(" Select the shop page", () => {
  homePage.getShopTab().click();
  productPage.siteCheckOut();
});

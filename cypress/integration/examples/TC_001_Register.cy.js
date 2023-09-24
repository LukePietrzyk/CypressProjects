/// <reference types="cypress" />
import registerPage from "./pageObjects/registerSite.cy";
let dane;
const register = new registerPage();

beforeEach(() => {
  cy.visit("http://rahulshettyacademy.com/client");
  cy.fixture("register.json").then((data) => {
    dane = data;
  });
});

describe("Register acc", () => {
  it("Register acc with correct data ", () => {
    register.registerButton.regButton().should("be.visible");
    register.clickRegisterButton();
    cy.url().should("contain", "register");
    register.enterfirstName(dane.firstName);
    register.elements.firstnameInput().should("contain.value", dane.firstName);
    register.enterlastName(dane.lastName);
    register.elements.lastnameInput().should("contain.value", dane.lastName);
    register.eneterEmail(dane.email);
    register.elements.emailInput().should("contain.value", dane.email);
    register.enterPhoneNumber(dane.phone);
    register.elements.phoneInput().should("contain.value", dane.phone);
    register.selectOccupation(dane.occupation);
    register.elements
      .occupationSelect()
      .should("contain.value", dane.occupation);
    register.selectRadioButton(dane.gender);
    register.enterPassword(dane.password, dane.password);
    register.checkBoxAge();
    register.registerButton.regButton().should("be.checked").and("be.visible");
    cy.get("input[type='submit']");
  });
});

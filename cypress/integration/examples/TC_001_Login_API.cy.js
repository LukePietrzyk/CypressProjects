/// <reference types="cypress" />

describe("Api testing ", () => {
  it("123", () => {
    cy.loginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
  });
});

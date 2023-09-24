/// <reference types="cypress" />
let dane;

before(() => {
  //cy.visit("https://rahulshettyacademy.com/angularpractice/");
  cy.fixture("example.json").then(function (data) {
    console.log(data);
    dane = data;
  });
});

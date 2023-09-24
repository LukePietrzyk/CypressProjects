/// <reference types="cypress" />

describe("Checkbox", () => {
  it("Clicking on checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.url().should("include", "AutomationPractice");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1")
      .uncheck()
      .should("not.be.checked")
      .and("have.value", "option1");
    cy.get("input[type='checkbox']").check(["option2", "option3"]);

    //static dropdown menu
    cy.get("select").select("option2").should("have.value", "option2");

    //dynami drop down menu
    cy.get("#autocomplete").type("pol");

    cy.get(".ui-menu-item div").each((ele) => {
      if (ele.text() === "Poland") {
        ele.trigger("click");
      }
    });
    cy.get("#autocomplete").should("have.value", "Poland");
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    //cy radio buttons
    cy.get('[value="radio2"]').check().should("be.checked");
  });
});

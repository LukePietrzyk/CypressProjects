/// <reference types="cypress" />

describe("Checkbox", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("Clicking on checkbox", () => {
    //cy.visit("https://qaclickacademy.com/practice.php");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.eql(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      expect(str).to.eql("Hello , Are you sure you want to confirm?");
    });
    //removing attribiute
    cy.get("#opentab").invoke("removeAttr", "target");
  });

  it("Validate price of course about python", () => {
    cy.get("tr td:nth-child(2)").each((el, index) => {
      const txt = el.text();
      if (txt.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const priceC = price.text();
            expect(priceC).to.eq("25");
          });
      }
    });
  });
});

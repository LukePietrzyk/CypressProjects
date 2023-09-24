class ProductPage {
  checkoutButton() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }
  siteCheckOut() {
    cy.url().should("contain", "shop");
  }
  alertMessageValidation() {
    cy.get(".alert").then((el) => {
      const text = el.text();
      expect(text).includes("Success!");
    });
  }
  checkoutButton() {
    cy.contains("Checkout").click();
  }
  countryInput(country) {
    cy.get("#country").type(country);
  }
  checkBoxButton() {
    cy.get("#checkbox2").click({ force: true }).should("be.checked");
  }
  submitButton() {
    cy.get('input[type="submit"]').click();
  }
  countryPopUp(dane) {
    cy.get(".suggestions > ul > li > a")
      .click()
      .then((el) => {
        const txt = el.text();
        expect(txt).includes(dane);
      });
  }
}

export default ProductPage;

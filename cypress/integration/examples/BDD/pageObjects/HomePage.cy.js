class HomePage {
  getEditBox() {
    return cy.get("form div:nth-child(1) .form-control");
  }
  getTwoWatDataBinding() {
    return cy.get(":nth-child(4) > .ng-untouched");
  }
  getGender() {
    return cy.get("select");
  }
  getEntrepreneaur() {
    return cy.get("#inlineRadio3");
  }
  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }
  getEditBox2() {
    return cy.get('form div:nth-child(1) input[class*="form-control"]');
  }
}

export default HomePage;

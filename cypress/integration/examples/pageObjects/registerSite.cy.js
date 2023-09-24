class registerPage {
  elements = {
    firstnameInput: () => cy.get('input[type="firstName"]'),
    lastnameInput: () => cy.get('input[type="lastName"]'),
    emailInput: () => cy.get('input[type="email"]'),
    phoneInput: () => cy.get("#userMobile"),
    occupationSelect: () => cy.get(".custom-select"),
    radioButtonMale: () => cy.get('input[value*="Male"]'),
    radioButtonFemale: () => cy.get('input[value*="Female"]'),
    passwordInput: () => cy.get("#userPassword"),
    confirmPasswordInput: () => cy.get("#confirmPassword"),
  };
  registerButton = {
    regButton: () => cy.get(".btn1").contains("Register"),
    checkBox: () => cy.get("input[type='checkbox']"),
  };
  enterfirstName(firstName) {
    this.elements.firstnameInput().clear;
    this.elements.firstnameInput().type(firstName);
  }
  enterlastName(lastName) {
    this.elements.lastnameInput().clear;
    this.elements.lastnameInput().type(lastName);
  }
  eneterEmail(email) {
    this.elements.emailInput().clear;
    this.elements.emailInput().type(email);
  }
  enterPhoneNumber(number) {
    this.elements.phoneInput().clear;
    this.elements.phoneInput().type(number);
  }
  selectOccupation(occupation) {
    this.elements.occupationSelect().select(occupation);
  }
  selectRadioButton(gender) {
    if (gender === "Male") {
      this.elements.radioButtonMale().check();
    } else {
      this.elements.radioButtonFemale().check();
    }
  }
  enterPassword(password, confirmPassword) {
    this.elements.passwordInput().clear;
    this.elements.confirmPasswordInput().clear;
    this.elements.passwordInput().type(password);
    this.elements.confirmPasswordInput().type(confirmPassword);
  }
  clickRegisterButton() {
    this.registerButton.regButton().click();
  }
  checkBoxAge() {
    this.registerButton.checkBox().check({ force: true }).trigger("change");
  }
}

export default registerPage;

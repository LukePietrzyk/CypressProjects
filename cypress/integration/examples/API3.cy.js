/// <reference types="cypress" />

describe("API testing -- check security bug", () => {
  it("Check if can get response data from another user", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
        req.continue((res) => {
          expect(res.statusCode).to.eql(200); //security bug if 200;
        }); //send request to server and get response back
      }
    ).as("changeURL");
    cy.get(".btn-primary").click();
    cy.wait("@changeURL");
  });
});

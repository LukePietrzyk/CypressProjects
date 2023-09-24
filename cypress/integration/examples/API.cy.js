/// <reference types="cypress" />

describe("API testing", () => {
  it("Mock response", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "Api testing 123 ŁP",
            isbn: "Łukasz,0001",
            aisle: "PIE",
          },
        ],
      }
    ).as("bookAPI");
    cy.get(".btn-primary").click();
    cy.wait("@bookAPI"); //make synchronaus
    cy.get("p").should("contain", "Oops only 1 Book available");
  });
});

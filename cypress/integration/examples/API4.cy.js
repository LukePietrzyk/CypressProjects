/// <reference types="cypress" />

describe("Api testing ", () => {
  it("123", () => {
    cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
      name: "API 123",
      isbn: "bcdsss",
      aisle: "22s7",
      author: "123",
    }).then(function (response) {
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.eq(200);
    });
  });
});

/// <reference types="cypress" />

describe("Autenticação", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://192.168.61.17:5173/login");

    cy.get('input[name="email"]').type("angela1@example.com");
    cy.get('input[name="password"]').type("1234");

    cy.get("button", "Login").click();

    // cy.url().should("include", "/clientdashboard");

    cy.get("h2").should("have.text", "Dashboard");
  });
});

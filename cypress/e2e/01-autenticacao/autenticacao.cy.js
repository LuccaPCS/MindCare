/* eslint-disable no-undef */
// eslint-env cypress
/// <reference types="cypress" />

describe("Autenticação", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[placeholder="Email"]').type("angela1@example.com");
    cy.get('input[placeholder="Senha"]').type("1234");

    cy.contains("button", "Login").click();

    cy.get("h2").should("have.text", "Dashboard do Psicólogo");
  });

  it("Deve exibir erro para usuário inválido", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[placeholder="Email"]').type("angela1@example.com");
    cy.get('input[placeholder="Senha"]').type("12345");

    cy.contains("button", "Login").click();

    cy.get("div.error-message").should(
      "have.text",
      "Usuário e senha não conferem."
    );
  });
});

/// <reference types="cypress" />

describe("Autenticação", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://192.168.61.17:5173/login");
  });
});

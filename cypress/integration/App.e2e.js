it("should load the page", () => {
  cy.visit("/");
  cy.get('[automation-id=text]').should('have.text', 'hello world');
  cy.get('[automation-id=button]').click();
  cy.get('[automation-id=text]').should('have.text', 'Хуй');
});
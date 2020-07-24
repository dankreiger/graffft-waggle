/// <reference types="cypress" />

/* eslint-disable */
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("cy.go() - go back or forward in the browser's history", () => {
    // https://on.cypress.io/go

    cy.findByText('Projects', { selector: 'a', exact: false }).click();
    cy.url().should('include', Cypress.env('PROJECTS'));

    cy.go('back');
    cy.url().should('include', Cypress.env('HOME'));

    cy.go('forward');
    cy.url().should('include', Cypress.env('PROJECTS'));

    // clicking back
    cy.go(-1);
    cy.url().should('include', Cypress.env('HOME'));

    // clicking forward
    cy.go(1);
    cy.url().should('include', Cypress.env('PROJECTS'));
  });

  it('goes through the header links', () => {
    // https://on.cypress.io/go

    cy.findByText('Projects', { selector: 'a', exact: false }).click();
    cy.url().should('include', Cypress.env('PROJECTS'));

    cy.findByText('About', { selector: 'a', exact: false }).click();
    cy.url().should('include', Cypress.env('ABOUT'));

    cy.findByText('Contact', { selector: 'a', exact: false }).click();
    cy.url().should('include', Cypress.env('CONTACT'));
  });

  it('opens mobile menu', () => {
    cy.viewport('iphone-6'); // Set viewport to 375px x 667px

    let itemsList = cy.findByTestId('nav-items-list');
    itemsList.should('not.be.visible');

    cy.findByLabelText(/Show Menu/i, {
      selector: 'button',
      exact: false,
    }).click();

    itemsList = cy.findByTestId('nav-items-list');
    itemsList.should('be.visible');
  });
});

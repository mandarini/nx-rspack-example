import { getGreeting } from '../support/app.po';

describe('web-components-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome web-components-app');
  });

  it('should load library correctly', () => {
    cy.get('#jslib').should('have.text', 'Hello js-lib');
  });
});

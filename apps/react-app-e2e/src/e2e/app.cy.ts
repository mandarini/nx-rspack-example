import { getGreeting } from '../support/app.po';

describe('react-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome react-app');
  });

  it('should load library correctly', () => {
    cy.get('#reactlib').should('have.text', 'Welcome to ReactLib!');
  });
});

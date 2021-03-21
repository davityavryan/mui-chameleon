/// <reference types="cypress" />

import '@cypress/react/support';

Cypress.Commands.add('getByTestId', (testId: string) => cy.get(`[data-testid="${testId}"]`));

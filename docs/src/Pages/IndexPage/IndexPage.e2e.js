/// <reference types="cypress" />

context('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('should', () => {
        it('contain correct title', () => {
            cy.getByTestId('side-bar-logo-button').click();

            cy.getByTestId('side-bar-editor').screenshot('side-bar-editor');
        });
    });
});

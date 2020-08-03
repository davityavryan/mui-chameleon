/// <reference types="cypress" />

context('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('should', () => {
        it('contain correct title', () => {
            cy.title().should('contain', 'Material-ui Chameleon');

            cy.screenshot();
        });
    });
});

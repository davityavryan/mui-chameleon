import '../../../../cypress'; // Add custom commands

context('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4040/');
    });

    describe('should', () => {
        it('contain correct title', () => {
            cy.getByTestId('side-bar-logo-button').click();

            cy.getByTestId('side-bar-editor').screenshot('side-bar-editor');
        });
    });
});

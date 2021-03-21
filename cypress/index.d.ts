declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-testid attribute.
         * @example cy.getByTestId('test-id')
         */
        getByTestId(testId: string): Chainable<Element>;
    }
}

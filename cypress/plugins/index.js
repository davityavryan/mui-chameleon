/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    // code coverage plugin sends collected results
    // using its own cy.tasks calls
    require('@cypress/code-coverage/task')(on, config);

    // Tell Cypress to use .babelrc(babel-config) file and instrument the specs files
    // only the extra application files will be instrumented not the spec files themselves
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

    return config;
};

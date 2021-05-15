import esbuildPreprocessor from './esbuildPreprocessor';

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
    on('file:preprocessor', esbuildPreprocessor);

    return config;
};

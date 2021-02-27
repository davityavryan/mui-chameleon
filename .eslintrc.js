module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'esnext',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
};

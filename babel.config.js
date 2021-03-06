const defaultPresets = ['@babel/preset-typescript', '@babel/preset-react'];

// We release a ES version of Material-UI Chameleon.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV !== 'es') {
    defaultPresets.push([
        '@babel/preset-env',
        {
            modules: process.env.BABEL_ENV === 'esm' ? false : 'commonjs',
        },
    ]);
}

const plugins = [
    '@babel/plugin-transform-react-constant-elements',
    // ['babel-plugin-react-remove-properties', { properties: ['data-testid'] }], // TODO: enable later
];

module.exports = {
    ignore: ['**/*.unit.{ts,tsx}', '**/*.e2e.{ts,tsx}'],
    presets: defaultPresets,
    plugins: [
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-object-assign', // for IE 11 support
    ],
    env: {
        cjs: {
            plugins,
        },
        esm: {
            plugins: [...plugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
        },
        es: {
            plugins: [...plugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
        },
    },
};

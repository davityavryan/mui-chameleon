const defaultPresets = ['@babel/preset-typescript', '@babel/preset-react'];

const env = process.env.BABEL_ENV || 'cjs';
const isCommonJS = env === 'cjs';

// We release a ES version of Material-UI Chameleon.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV !== 'es') {
    defaultPresets.push([
        '@babel/preset-env',
        {
            modules: isCommonJS ? 'commonjs' : false,
        },
    ]);
}

const plugins = [
    '@babel/plugin-transform-react-constant-elements',
    // See https://material-ui.com/guides/minimizing-bundle-size/
    [
        'babel-plugin-import',
        {
            libraryName: '@material-ui/core',
            libraryDirectory: isCommonJS ? '' : 'esm',
            camel2DashComponentName: false,
        },
        'core',
    ],
    // See https://material-ui.com/guides/minimizing-bundle-size/
    [
        'babel-plugin-import',
        {
            libraryName: '@material-ui/icons',
            libraryDirectory: isCommonJS ? '' : 'esm',
            camel2DashComponentName: false,
        },
        'icons',
    ],
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

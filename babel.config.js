const target = process.env.TARGET || 'cjs';

const presets = ['@babel/preset-typescript', '@babel/preset-react'];

// We release a ES version of Material-UI Chameleon.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (target !== 'es') {
    presets.push(['@babel/preset-env', { modules: target === 'cjs' ? 'commonjs' : false }]);
}

const plugins = [
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ['@babel/plugin-transform-runtime', { useESModules: ['es', 'esm'].includes(target) }],
    '@babel/plugin-transform-object-assign', // for IE 11 support
    '@babel/plugin-transform-react-constant-elements',

    // See https://material-ui.com/guides/minimizing-bundle-size/
    [
        'babel-plugin-import',
        {
            libraryName: '@material-ui/core',
            libraryDirectory: target === 'cjs' ? '' : 'esm',
            camel2DashComponentName: false,
        },
        'core',
    ],
    [
        'babel-plugin-import',
        {
            libraryName: '@material-ui/icons',
            libraryDirectory: target === 'cjs' ? '' : 'esm',
            camel2DashComponentName: false,
        },
        'icons',
    ],
];

if (process.env.NODE_ENV !== 'test') {
    plugins.push(['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]);
}

module.exports = {
    presets,
    plugins,
};

const target = process.env.TARGET || 'cjs';

const presets = ['@babel/preset-typescript', '@babel/preset-react'];
const importPaths = {
    base: '@mui/base',
    material: '@mui/material',
    system: '@mui/system',
    utils: '@mui/utils',
    icons: '@mui/icons-material',
};

// We release a ES version of MUI Chameleon.
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

    // See https://mui.com/material-ui/guides/minimizing-bundle-size/
    ...Object.entries(importPaths).map(([name, path]) => [
        'babel-plugin-import',
        {
            libraryName: path,
            libraryDirectory: target === 'cjs' ? '' : 'esm',
            camel2DashComponentName: false,
        },
        name,
    ]),
];

if (process.env.NODE_ENV !== 'test') {
    plugins.push(['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]);
}

export default { presets, plugins };

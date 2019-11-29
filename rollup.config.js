import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const input = './src/index.js';
const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@material-ui/core': 'MaterialUI',
    'object-path': 'objectPath',
    'react-color': 'reactColor',
};
const babelOptions = {
    exclude: /node_modules/,
    // We are using @babel/plugin-transform-runtime
    runtimeHelpers: true,
    configFile: './babel.config.js',
};
const commonjsOptions = {
    include: /node_modules/,
    namedExports: {
        'prop-types': [
            'elementType',
            'bool',
            'func',
            'object',
            'oneOfType',
            'element',
        ],
        'react-is': [
            'ForwardRef',
            'isFragment',
            'isLazy',
            'isMemo',
            'isValidElementType',
        ],
    },
};
const resolveOptions = {
    extensions: ['.jsx', '.js'],
};

function onwarn(warning) {
    throw Error(warning.message);
}

export default [
    {
        input,
        onwarn,
        output: {
            file: 'build/umd/material-ui-chameleon.development.js',
            format: 'umd',
            name: 'MaterialUIChameleon',
            globals,
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve(resolveOptions),
            babel(babelOptions),
            commonjs(commonjsOptions),
            replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        ],
    },
    {
        input,
        onwarn,
        output: {
            file: 'build/umd/material-ui-chameleon.production.min.js',
            format: 'umd',
            name: 'MaterialUIChameleon',
            globals,
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve(resolveOptions),
            babel(babelOptions),
            commonjs(commonjsOptions),
            replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
            terser(),
        ],
    },
];

import path from 'path';

import browserslist from 'browserslist';

import { ESBuildPlugin, ESBuildMinifyPlugin } from 'esbuild-loader';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import DefinePlugin from 'webpack/lib/DefinePlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const here = (dir) => (dir ? path.resolve(process.cwd(), dir) : process.cwd());

function getBuildTarget() {
    const SUPPORTED_BUILD_TARGETS = ['es', 'chrome', 'edge', 'firefox', 'ios', 'node', 'safari'];

    const sep = ' ';
    const supported = (b) =>
        SUPPORTED_BUILD_TARGETS.some((t) => b.startsWith(t + sep)) ? b.replace(sep, '') : undefined;

    return browserslist().map(supported).filter(Boolean);
}

const target = getBuildTarget();

const dirs = {
    src: './src',
    dist: './public',
};

const devServerPackages = [
    'ansi-html',
    'ansi-regex',
    'events',
    'html-entities',
    'loglevel',
    'node-libs-browser',
    'punycode',
    'querystring-es3',
    'sockjs-client',
    'strip-ansi',
    'url',
    'webpack-dev-server',
];

export default (env, args = {}) => {
    const { mode = 'development' } = args;
    const isProduction = mode === 'production';

    return {
        mode,
        context: here(),
        target: 'web',
        entry: {
            index: `${dirs.src}/index.ts`,
        },
        output: {
            path: here(dirs.dist),
            filename: `js/[name]${isProduction ? '.[contenthash]' : ''}.js`,
            chunkFilename: `js/[name]${isProduction ? '.[chunkhash]' : ''}.js`,
            sourceMapFilename: '[file].map',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            modules: [here('./node_modules'), here(dirs.src)],
            alias: {
                'material-ui-chameleon': here('../build'),
            },
        },
        devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.[tj]sx?$/,
                    sideEffects: false,
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'tsx',
                        target,
                    },
                },
                {
                    test: /\.svg$/,
                    include: here(dirs.src),
                    exclude: here('node_modules'),
                    loader: 'svg-react-loader',
                    options: {
                        classIdPrefix: '[name]-[hash:8]__',
                        props: {
                            fill: 'currentColor',
                            preserveAspectRatio: 'xMidYMid meet',
                        },
                        propsMap: {
                            fillRule: 'fill-rule',
                        },
                    },
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyPlugin({
                patterns: [
                    {
                        from: `${dirs.src}/static/img`,
                        to: './img',
                    },
                    {
                        from: `${dirs.src}/static/browserconfig.xml`,
                        to: './browserconfig.xml',
                    },
                    {
                        from: `${dirs.src}/static/manifest.json`,
                        to: './manifest.json',
                    },
                ],
            }),
            new HtmlWebpackPlugin({
                template: `${dirs.src}/static/index.html`,
                cache: true,
                scriptLoading: 'defer',
                minify: isProduction && {
                    minifyCSS: true,
                    minifyJS: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                },
            }),
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
            new ESBuildPlugin(),
            !isProduction && new ReactRefreshWebpackPlugin(),
        ].filter(Boolean),
        optimization: {
            minimize: isProduction,
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    // Separate dev related packages
                    'webpack-dev-server': {
                        test: new RegExp(`[\\\\/]node_modules[\\\\/](${devServerPackages.join('|')})[\\\\/]`),
                        name: 'vendors/webpack-dev-server',
                        chunks: 'all',
                        priority: 2,
                    },
                    'material-ui-chameleon': {
                        test: (module) =>
                            /[\\/]material-ui-chameleon[\\/]build[\\/]/.test(module.request) ||
                            module.rawRequest === 'material-ui-chameleon',
                        name: 'vendors/material-ui-chameleon',
                        priority: 2,
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        enforce: true,
                        name: (module) => {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const match = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]([^\\/]*)([\\/]([^\\/]*))?([\\/]([^\\/]*))?|$)/
                            );

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            const packageName = match[1].replace('@', '');
                            const subPackageName = match[3];
                            const componentName = (match[7] || '').toLowerCase();

                            if (['material-ui', 'mdi'].includes(packageName)) {
                                if (componentName) {
                                    return `vendors/${packageName}/${subPackageName}/${componentName}`;
                                }

                                return `vendors/${packageName}/${subPackageName}`;
                            }

                            return `vendors/${packageName}`;
                        },
                    },
                },
            },
            minimizer: [new ESBuildMinifyPlugin({ target })],
        },
        performance: {
            hints: isProduction && 'warning',
            maxEntrypointSize: Infinity,
            maxAssetSize: 0.25 * 10 ** 6, // 0.25mb
        },
        stats: {
            cachedAssets: false,
            children: false,
            modules: false,
            entrypoints: false,
            errorDetails: true,
            excludeAssets: /\.(jpe?g|png|webp|gif|ogg|m4a|mp4|webm|svg|ico|cur|eot|ttf|woff|woff2|map|LICENSE)$/i, // hiding images, fonts
        },
        devServer: {
            port: 4040,
            hot: true,
            contentBase: here(dirs.dist),
            compress: true,
            historyApiFallback: true,
            overlay: {
                warnings: true,
                errors: true,
            },
        },
    };
};

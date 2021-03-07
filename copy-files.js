#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const packageData = require('./package.json');
const buildPath = path.join(__dirname, './build');

async function copyFileToBuild(filePath) {
    const destination = path.resolve(buildPath, filePath);

    await fs.mkdirSync(path.dirname(destination), { recursive: true });

    return fs.copyFileSync(path.resolve(__dirname, filePath), destination);
}

async function prependBanner(file, string) {
    const data = await fs.readFileSync(file, 'utf8');

    // If string was not yet prepended
    if (!data.startsWith(string)) {
        await fs.writeFileSync(file, `${string}\n${data}`, 'utf8');
    }
}

async function addLicense(packageData) {
    const license = `/** @license Material-UI Chameleon v${packageData.version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 */`;
    await Promise.all(
        [
            './index.js',
            './SideBarEditor/index.js',
            './ThemeProvider/index.js',
            './es/index.js',
            './es/SideBarEditor/index.js',
            './es/ThemeProvider/index.js',
            './esm/index.js',
            './esm/SideBarEditor/index.js',
            './esm/ThemeProvider/index.js',
            './umd/material-ui-chameleon.js',
        ].map(async (file) => {
            try {
                await prependBanner(path.resolve(buildPath, file), license);
            } catch (err) {
                if (err.code === 'ENOENT') {
                    console.log(`Skipped license for ${file}`);
                } else {
                    throw err;
                }
            }
        })
    );
}

async function run() {
    try {
        await copyFileToBuild('CHANGELOG.md');
        await copyFileToBuild('LICENSE.md');
        await copyFileToBuild('README.md');

        await addLicense(packageData);

        const { scripts, devDependencies, engines, ...packageDataOther } = packageData;

        const newPackageData = {
            ...packageDataOther,
            private: false,
            module: './esm/index.js',
            main: './index.js',
            types: './types/index.d.ts',
        };

        await fs.writeFileSync(path.resolve(buildPath, 'package.json'), JSON.stringify(newPackageData, null, 4));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();

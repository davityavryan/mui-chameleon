import fs from 'fs';
import url from 'url';
import path from 'path';

import packageData from './package.json' assert { type: 'json' };

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, './dist');

async function copyFileToBuild(filePath: string) {
    const destination = path.resolve(distPath, filePath);

    await fs.promises.mkdir(path.dirname(destination), { recursive: true });

    return fs.promises.copyFile(path.resolve(__dirname, filePath), destination);
}

async function prependBanner(file: fs.PathLike, string: string) {
    const data = await fs.promises.readFile(file, 'utf8');

    // If string was not yet prepended
    if (!data.startsWith(string)) {
        await fs.promises.writeFile(file, `${string}\n${data}`, 'utf8');
    }
}

async function addLicense() {
    const license = `/** @license MUI Chameleon v${packageData.version}
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
        ].map(async (file) => {
            try {
                await prependBanner(path.resolve(distPath, file), license);
            } catch (err: any) {
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
        await copyFileToBuild('LICENSE.md');
        await copyFileToBuild('README.md');

        await addLicense();

        delete packageData.private;
        delete packageData.scripts;
        delete packageData.devDependencies;
        delete packageData.engines;

        const newPackageData = {
            ...packageData,
            module: './esm/index.js',
            main: './index.js',
            types: './index.d.ts',
        };

        await fs.promises.writeFile(path.resolve(distPath, 'package.json'), JSON.stringify(newPackageData, null, 4));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();

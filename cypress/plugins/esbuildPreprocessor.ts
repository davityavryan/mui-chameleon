import fs from 'fs';
import { createHash } from 'crypto';
import { buildSync } from 'esbuild';

const checksumFile = (path: string) =>
    new Promise((resolve, reject) => {
        const hash = createHash('sha1');
        const stream = fs.createReadStream(path);

        stream.on('error', (err: Error) => reject(err));
        stream.on('data', (chunk: string) => hash.update(chunk));
        stream.on('end', () => resolve(hash.digest('hex')));
    });

const bundled: { [filePath: string]: string } = {};

const esbuildPreprocessor = (file: Cypress.FileObject) => {
    const { filePath, outputPath, shouldWatch } = file;

    const hash = checksumFile(filePath);
    const key = `${filePath}-${hash}`;

    // Use cache
    if (bundled[key]) {
        return bundled[key];
    }

    if (
        filePath.endsWith('.js') ||
        filePath.endsWith('.jsx') ||
        filePath.endsWith('.ts') ||
        filePath.endsWith('.tsx')
    ) {
        const result = buildSync({
            entryPoints: [filePath],
            sourcemap: 'inline',
            write: false,
            bundle: true,
            outfile: outputPath,
            watch: shouldWatch,
            logLevel: 'error',
        });

        bundled[key] = result.outputFiles[0].path;
    }

    return bundled[key];
};

export default esbuildPreprocessor;

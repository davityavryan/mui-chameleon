import { mergeConfig } from 'vite';
import { defineConfig, configDefaults } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            root: './src',
            include: ['**/*.unit.{ts,tsx}'],
            environment: 'jsdom',
            environmentMatchGlobs: [
                ['**/*.unit.ts}', 'node'],
                ['**/*.unit.tsx}', 'jsdom'],
            ],
            setupFiles: '../vitest.setup.tsx',
            coverage: {
                clean: true,
                cleanOnRerun: true,
                all: true,
                reportsDirectory: '../coverage',
                reporter: ['json', 'html'],
                include: ['**/*.ts', '**/*.tsx'],
                exclude: configDefaults.coverage.exclude.concat([
                    'vitest.utils.ts',
                    'vitest.setup.tsx',
                    '**/*.unit.{ts,tsx}',
                ]),
                provider: 'c8',
                extension: ['.ts', '.tsx'],
                src: ['./src'],
            },
        },
    })
);

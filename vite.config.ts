import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    root: 'docs/src',
    base: './',
    publicDir: 'static',
    server: {
        port: 4040,
    },
    build: {
        outDir: '../dist',
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        tsconfigPaths(),
        svgr({
            exportAsDefault: true,
            // svgr options: https://react-svgr.com/docs/options/
            svgrOptions: {
                titleProp: false,
                replaceAttrValues: {
                    fill: 'currentColor',
                    preserveAspectRatio: 'xMidYMid meet',
                    'fill-rule': 'fillRule',
                },
            },
            include: '**/*.svg',
            exclude: '',
        }),
        react(),
    ],
});

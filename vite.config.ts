import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(async () => {
    return {
        resolve: {
            extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.d.ts']
        },
        clearScreen: true,
        esbuild: {
            jsxFactory: 'h',
            jsxFragment: 'Fragment',
            jsxInject: `import React from 'react'`
        },
        plugins: [
            react({}),
            checker({
                typescript: true
            })
        ],
        server: {
            hmr: {
                overlay: false
            },
            port: 3000,
            strictPort: true,
            open: true
        },
        build: {
            outDir: 'build'
        }
    };
});

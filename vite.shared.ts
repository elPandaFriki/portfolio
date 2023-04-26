import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import { UserConfig } from 'vite';

const config: UserConfig = {
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
    test: {
        globals: true,
        passWithNoTests: true,
        watch: false,
        coverage: {
            reporter: [
                [
                    'json',
                    {
                        file: 'coverage.json'
                    }
                ],
                ['html']
            ],
            reportsDirectory: 'coverage',
            provider: 'c8',
            enabled: true,
            clean: true,
            cleanOnRerun: true
        }
    },
    build: {
        outDir: 'build'
    }
};

export default config;

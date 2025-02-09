import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import { type UserConfig } from 'vite';
import fullReload from 'vite-plugin-full-reload';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: UserConfig = {
    resolve: {
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.d.ts']
    },
    // clear screen is needed for styles to be reloaded properly
    clearScreen: true,
    base: './',
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import React from 'react'`
    },
    define: {
        global: {}
    },
    plugins: [
        tsconfigPaths(),
        react({}),
        checker({
            eslint: {
                lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
            },
            typescript: true
        }),
        fullReload('./**/*', {
            root: __dirname,
            delay: 0,
            always: true
        })
    ],
    server: {
        host: true,
        hmr: {
            overlay: false
        },
        port: 3000,
        strictPort: true,
        open: true
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'src/setupTests.ts',
        mockReset: true,
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
            provider: 'v8',
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

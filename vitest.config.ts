/// <reference types="vitest" />

import { defineProject, mergeConfig } from 'vitest/config';
import shared from './vite.shared';

export default mergeConfig(
    shared,
    defineProject({
        test: {
            dom: true,
            typecheck: {
                checker: 'tsc'
            },
            css: true,
            globals: true,
            setupFiles: ['./src/setupTests.ts'],
            environment: 'happy-dom'
        }
    })
);

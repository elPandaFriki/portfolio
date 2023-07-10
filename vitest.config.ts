/// <reference types="vitest" />

import { mergeConfig } from 'vitest/config';
import shared from './vite.shared';

export default mergeConfig(
    shared,
    {
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
    }
);

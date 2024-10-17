import react from 'eslint-plugin-react'
import reactRefresh from 'react-refresh'
import eslint from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default tseslint.config(
        {
            root: true,
            ignores: [
                "**/node_modules/**",
                "**/dist/**",
                "**/build/**",
                "**/scripts/**"
            ],
        }
        // BASIC ESLINT AND TYPESCRIPT
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        {
            plugins: {
                '@typescript-eslint': tseslint.plugin
            },
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier"
            ],
            languageOptions: {
                parser: tseslint.parser,
                parserOptions: {
                    projectService: true,
                    tsconfigRootDir: "./",
                }
            },
            rules: {
                "typescript-eslint/consistent-type-imports": [
                    2,
                    {
                        fixStyle: "separate-type-imports"
                    }
                ],
                "typescript-eslint/no-restricted-imports": [
                    2,
                    {
                        paths: [
                            {
                                name: "react-redux",
                                importNames: [
                                    "useSelector",
                                    "useStore",
                                    "useDispatch"
                                ],
                                message: "Please use pre-typed versions from `src/app/hooks.ts` instead."
                            }
                        ]
                    }
                ]
            },
        },
        // TESTING
        {
            ..jestPlugin.configs['flat/recommended'],
            plugins: {
                jest: jestPlugin
            },
            overrides: [
                {
                    files: ["*{test,spec}.{t,j}s?(x)"],
                    env: {
                        jest: true
                    }
                }
            ]
        }
        // JAVASCRIPT
        {
            files: ['**/*.js'],
            ...tseslint.configs.disableTypeChecked,
        },
        // REACT
        {
            files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
            ...reactPlugin.configs.flat.recommended,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.serviceworker
            },
            extends: [
                "plugin:react/jsx-runtime",
                "plugin:react-hooks/recommended",
            ],
            languageOptions: {
                parserOptions: {
                    ecmaVersion: "latest",
                    sourceType: "module",
                    ecmaFeatures: {
                        jsx: true
                    }
                }
            },
            plugins: {
                reactRefresh
            },
            overrides: [
                {
                    files: ["*.{c,m,}{t,j}s", "*.{t,j}sx"]
                }
            ]
        }
    )
]

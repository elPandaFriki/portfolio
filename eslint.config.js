import react from 'eslint-plugin-react'
import reactRefresh from 'react-refresh'
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default [
    ...tseslint.config(
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    );
    {
        languageOptions: {
            parserOptions: {
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
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        ...reactPlugin.configs.flat.recommended,
    },
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.serviceworker
        },
        extends: [
            "eslint:recommended",
            "plugin:react/jsx-runtime",
            "plugin:@typescript-eslint/recommended",
            "plugin:react-hooks/recommended",
            "prettier"
        ],
        root: true,
        ignorePatterns: [
            "node_modules",
            "dist",
            "build",
            "scripts"
        ],
        languageOptions: {
            parserOptions: {
                project: true,
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
            },
            {
                files: ["*{test,spec}.{t,j}s?(x)"],
                env: {
                    jest: true
                }
            }
        ]
    }
]

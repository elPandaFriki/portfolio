import react from 'eslint-plugin-react'
import reactRefresh from 'react-refresh'
import typescriptEslint from '@typescript/eslint'
import globals from 'globals'
import typescriptParser from '@typescript-eslint/parser'

export default [
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
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
            parser: typescriptParser,
            parserOptions: {
                project: true,
                tsconfigRootDir: "./",
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react,
            reactRefresh,
            typescriptEslint
        },
        rules: {
            "typescriptEslint/consistent-type-imports": [
                2,
                {
                    fixStyle: "separate-type-imports"
                }
            ],
            "typescriptEslint/no-restricted-imports": [
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

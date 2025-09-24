import vuePlugin from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    // Ignore build outputs
    { ignores: ['.nuxt/', '.output/', 'node_modules/', 'dist/'] },

    // JS/TS files
    {
        files: ['**/*.{js,ts,mjs,cjs,mts,cts}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: globals.browser,
        },
        plugins: { '@typescript-eslint': tsPlugin },
        rules: {
            'arrow-parens': ['error', 'always'],
            'brace-style': ['error', '1tbs', { allowSingleLine: true }],
            camelcase: 'error',
            'comma-dangle': ['error', 'always-multiline'],
            'comma-style': ['error', 'last'],
            curly: 'error',
            eqeqeq: ['warn', 'always'],
            indent: ['error', 4, { SwitchCase: 1 }],
            'keyword-spacing': 'error',
            'linebreak-style': ['error', 'unix'],
            'new-parens': 'error',
            'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
            'no-const-assign': 'error',
            'no-unused-vars': ['error', { args: 'none' }],
            'no-whitespace-before-property': 'error',
            'object-curly-spacing': ['error', 'always'],
            quotes: 'off',
            'require-await': 'off',
            semi: ['error', 'never'],
            'space-before-blocks': ['error', 'always'],
            'space-in-parens': ['error', 'never'],
            strict: ['error', 'never'],
            '@typescript-eslint/no-unused-vars': ['error', { args: 'none', varsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },

    // Vue files
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser, // <script lang="ts"> uses TS parser
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: { vue: vuePlugin },
        rules: {
            'vue/html-indent': ['error', 4],
            'vue/multi-word-component-names': 'off',
            'vue/no-use-v-if-with-v-for': 'error',
            'vue/no-v-html': 'off',
        },
    },
])

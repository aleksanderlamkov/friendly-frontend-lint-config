import globals from 'globals'
import { defineConfig } from 'eslint/config'

import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import babelParser from '@babel/eslint-parser'

import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

import tsEslint from 'typescript-eslint'

const ignores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/coverage/**',
  '**/*.log',
  '**/npm-debug.log*',
  '**/.git/**',
  '**/.idea/**',
  '**/.vscode/**',
  '**/.DS_Store',
]

const commonPlugins = {
  prettier: prettierPlugin,
  react: reactPlugin,
  'react-hooks': reactHooksPlugin,
  'jsx-a11y': jsxA11yPlugin,
}

const jsxSettings = {
  react: {
    version: 'detect',
  },
}

const commonRules = {
  ...reactPlugin.configs.recommended.rules,
  ...reactHooksPlugin.configs.recommended.rules,
  ...jsxA11yPlugin.configs.recommended.rules,
  ...prettierConfig.rules,
  'react/display-name': 'off',
  'react/no-unescaped-entities': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'no-console': 'warn',
  eqeqeq: 'warn',
  curly: 'warn',
  'no-else-return': 'warn',
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
  'jsx-a11y/media-has-caption': 'warn',
  'jsx-a11y/no-noninteractive-tabindex': 'warn',
}

export default defineConfig([
  // JS/JSX
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ignores,
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          plugins: ['@babel/plugin-syntax-jsx'],
        },
      },
      globals: globals.browser,
    },
    plugins: commonPlugins,
    settings: jsxSettings,
    rules: commonRules,
  },
  // TS/TSX
  {
    files: ['**/*.{ts,tsx}'],
    ignores,
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        project: false,
      },
      globals: globals.browser,
    },
    plugins: {
      ...commonPlugins,
      '@typescript-eslint': tsEslint.plugin,
    },
    settings: jsxSettings,
    rules: {
      ...tsEslint.configs.recommended.rules,
      ...commonRules,
    },
  },
])

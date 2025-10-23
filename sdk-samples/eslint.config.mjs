import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jestPlugin from 'eslint-plugin-jest';

// generate a disable map for rules tied to legacy (now ignored) function component
// propTypes/defaultProps features; we don't blanket disable every react rule—only those that hinge
// on removed runtime behavior
const react19LegacyRulesOff = {
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/default-props-match-prop-types': 'off',
  'react/no-unused-prop-types': 'off',
  'react/react-in-jsx-scope': 'off'
};
export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  jsxA11yPlugin.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs['recommended-latest'],
  { ignores: ['dist/', 'extension.js'] },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        console: 'readonly',

        // Core Jest globals
        global: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly'
      }
    },
    settings: {
      'import/extensions': ['.js', '.jsx'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx']
        }
      },
      react: {
        version: 'detect'
      },
      linkComponents: [
        'Hyperlink', { name: 'Link', linkAttribute: 'to' }
      ]
    },
    plugins: {
      jest: jestPlugin
    },
    // merge Jest recommended rules and disable legacy React 19 function component prop rules
    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...react19LegacyRulesOff
    }
  }
];
/** @typedef { import("eslint").ESLint.ConfigData } ESlintConfigData */

const isDev = process.env.VSCODE_PID || process.env.NODE_ENV === 'development'

/** @type {ESlintConfigData} */
module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {},
		},
	},
	parserOptions: {
		ecmaVersion: 'latest',
		project: [],
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	plugins: [
		'react',
		'react-hooks',
		'react-native',
		'es',
		// 'import',
		'unused-imports',
		'simple-import-sort',
	],
	rules: {
		eqeqeq: ['warn', 'smart'],
		'arrow-body-style': 'off',
		'no-prototype-builtins': 'warn',
		'no-empty-function': 'off',
		'no-console': isDev ? 'off' : ['error', { allow: ['error', 'warn', 'info', 'assert', 'debug'] }],
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'unused-imports/no-unused-imports': isDev ? 'off' : 'warn',
		'react/jsx-no-useless-fragment': isDev ? 'off' : 'warn',
		'react/self-closing-comp': isDev ? 'off' : 'warn',
		// not available for android jsc runtime
		// 'es/no-string-prototype-replaceall': 'error',
		// only activate it when lint-staged
		// rules below removed current errors but could be useful
		'no-useless-catch': 'warn',
		'no-unsafe-finally': 'warn',
		// 'import/no-cycle': 'warn',
		'react/jsx-key': 'warn',
		'react-hooks/rules-of-hooks': 'warn',
		'prefer-const': 'warn',
	},
	overrides: [
		{
			files: ['*.{ts,tsx}'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: 'tsconfig.json',
			},
			plugins: ['@typescript-eslint'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				// next plugin only works with @typescript-eslint/parser
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				'@typescript-eslint/no-empty-interface': 'off',
				'@typescript-eslint/no-namespace': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-unused-vars': isDev ? 'off' : 'warn',
				// rules below removed current errors but could be useful
				'@typescript-eslint/ban-ts-comment': 'warn',
				'@typescript-eslint/unbound-method': 'warn',
				'@typescript-eslint/no-floating-promises': 'warn',
				'@typescript-eslint/no-misused-promises': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'warn',
				'@typescript-eslint/no-unnecessary-type-assertion': 'warn',
				'@typescript-eslint/prefer-as-const': 'warn',
				'@typescript-eslint/ban-types': 'warn',
				'@typescript-eslint/no-empty-function': 'warn',
				'@typescript-eslint/require-await': 'warn',
				'@typescript-eslint/no-unsafe-member-access': 'warn',
				'@typescript-eslint/no-unsafe-argument': 'warn',
				'@typescript-eslint/no-explicit-any': 'warn',
				'@typescript-eslint/restrict-plus-operands': 'warn',
				'@typescript-eslint/no-unsafe-call': 'warn',
				'@typescript-eslint/restrict-template-expressions': 'warn',
				'@typescript-eslint/no-unsafe-return': 'warn',
				'@typescript-eslint/no-unnecessary-type-constraint': 'warn',
				'@typescript-eslint/await-thenable': 'warn',
				'prefer-const': 'warn',
			},
		},
	],
}

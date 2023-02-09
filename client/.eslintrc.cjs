module.exports = {
	env: {
		browser: true,
		es2021: true,
		amd: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'airbnb-typescript',
		'eslint-config-prettier',
		'plugin:react/jsx-runtime',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['*/tsconfig.eslint.json', 'tsconfig.eslint.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', '@typescript-eslint', 'eslint-plugin-prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-console': 0,
		'import/order': 0,
		allowTernary: 0,
		'import/no-unresolved': ['error', { commonjs: true }],
		'import/no-extraneous-dependencies': 'error',
		// Turned off because conflicts with the ones above and does not support aliases
		'node/no-missing-require': 'off',
		'node/no-extraneous-import': 'off',
	},
};

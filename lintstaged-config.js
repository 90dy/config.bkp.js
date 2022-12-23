module.exports = {
	'lint-staged': {
		'*.{js,ts,tsx}': ['eslint --fix', 'prettier --write'],
	},
}

module.exports = {
	plugins: [
		// require('postcss-import'),
		// require('postcss-discard-comments')({ removeAll: true }),
		require('tailwindcss')('./src/styles/tailwind.config.js'),
		// require('postcss-preset-env')({ stage: 1 }),
		// require('@fullhuman/postcss-purgecss')({
		// 	content: ['src/**/*.css', 'src/**/*.xml'],
		// }),
		// process.env.NODE_ENV != 'development' && require('autoprefixer'),
	],
}

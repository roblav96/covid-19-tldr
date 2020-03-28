const convertJsToSass = require('@epegzz/sass-vars-loader/src/utils/convertJsToSass')
const flat = require('flat')
const path = require('path')
const readVarsFromTypescriptFiles = require('@epegzz/sass-vars-loader/src/utils/readVarsFromTypescriptFiles')

let theme = readVarsFromTypescriptFiles([path.resolve(__dirname, 'src/styles/theme.ts')])
theme = flat(theme, { delimiter: '-' })

/** @type { import("@vue/cli-service").ProjectOptions } */
module.exports = {
	css: {
		loaderOptions: {
			sass: { prependData: convertJsToSass(theme, 'sass') },
			scss: { prependData: convertJsToSass(theme, 'scss') },
		},
		...(process.env.NODE_ENV == 'development' && {
			sourceMap: true,
		}),
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [path.resolve(__dirname, 'src/styles/variables.scss')],
		},
	},

	...(process.env.NODE_ENV == 'production' && {
		transpileDependencies: [
			'resize-detector',
			'vue-echarts',
			//
		],
	}),

	/** @param config { import("webpack-chain") } */
	chainWebpack: (config) => {
		config.devtool(process.env.NODE_ENV == 'development' ? 'eval-source-map' : 'source-map')
		config.plugins.delete('no-emit-on-errors')
		config.plugin('friendly-errors').tap((options) => {
			options[0].clearConsole = false
			return options
		})
	},
}

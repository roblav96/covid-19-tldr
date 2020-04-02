const flat = require('flat')
const path = require('path')

const convertJsToSass = require('@epegzz/sass-vars-loader/src/utils/convertJsToSass')
const readVarsFromJavascriptFiles = require('@epegzz/sass-vars-loader/src/utils/readVarsFromJavascriptFiles')
const theme = flat(
	readVarsFromJavascriptFiles([path.resolve(__dirname, 'src/styles/theme.config.js')]),
	{ delimiter: '-' },
)
const prependData = {
	sass: `@import "~@/styles/variables.scss"\n${convertJsToSass(theme, 'sass')}`,
	scss: `@import "~@/styles/variables.scss";\n${convertJsToSass(theme, 'scss')}`,
}

/** @type { import("@vue/cli-service").ProjectOptions } */
module.exports = {
	css: {
		loaderOptions: {
			sass: { prependData: prependData.sass },
			scss: { prependData: prependData.scss },
		},
		...(process.env.NODE_ENV == 'development' && {
			sourceMap: true,
		}),
	},

	...(process.env.NODE_ENV == 'production' && {
		transpileDependencies: [
			'resize-detector',
			'vue-echarts',
			//
		],
	}),

	// configureWebpack(config) {},

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

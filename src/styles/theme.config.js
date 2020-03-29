const themes = require('@carbon/themes')
const colors = require('@carbon/colors')

// const carbon = (themes as any).g10 as typeof themes.default.g10
const fontFamilies = {
	mono: `'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace`,
	sans: `'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif`,
	sansCondensed: `'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif`,
	sansHebrew: `'IBM Plex Sans Hebrew', 'Helvetica Hebrew', 'Arial Hebrew', sans-serif`,
	serif: `'IBM Plex Serif', 'Georgia', Times, serif`,
}

module.exports = {
	'family-sans-serif': fontFamilies.sans,
	'family-monospace': fontFamilies.mono,

	'colors': {
		charts: [
			colors.purple[70],
			colors.cyan[50],
			colors.teal[70],
			colors.magenta[70],
			colors.red[50],
			colors.red[90],
			colors.green[60],
			colors.blue[80],
			colors.magenta[50],
			'#b28600',
			colors.teal[50],
			colors.cyan[90],
			'#8a3800',
			colors.purple[50],
		],
	},
}

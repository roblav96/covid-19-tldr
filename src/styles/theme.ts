import * as cthemes from '@carbon/themes'
import { colors as ccolors } from '@carbon/colors'
import { fontFamilies as cfontFamilies } from '@carbon/type'

export default {
	...cfontFamilies,

	carbon: (cthemes as any).g10 as typeof cthemes.default.g10,

	theme: {
		'primary': '#488C89',
		'bg-primary': '#67B6B3',
		'text-primary': '#398B86',
		'text-light': '#849A99',
		'white': '#F7F7F5',
		'pink': '#FFE1E8',
		// '____': '____',
		// '____': '____',
	},

	charts: [
		ccolors.purple['70'],
		ccolors.cyan['50'],
		ccolors.teal['70'],
		ccolors.magenta['70'],
		ccolors.red['50'],
		ccolors.red['90'],
		ccolors.green['60'],
		ccolors.blue['80'],
		ccolors.magenta['50'],
		ccolors.yellow['50'],
		ccolors.teal['50'],
		ccolors.cyan['90'],
		ccolors.orange['70'],
		ccolors.purple['50'],
	] as string[],
}

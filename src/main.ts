import '@/plugins/pwa'
import '@ibm/plex/css/ibm-plex.css'
import 'carbon-components/css/carbon-components.css'
// import '@/styles/fonts.scss'
// import '@/styles/styles.scss'

import Vue from 'vue'
Vue.config.devtools = false
Vue.config.performance = false
Vue.config.productionTip = false

import Buefy, { BuefyConfig } from 'buefy'
Vue.use(Buefy, {
	defaultNoticeQueue: false,
	defaultSnackbarDuration: 5000,
	defaultToastDuration: 5000,
	defaultInputAutocomplete: 'off',
	defaultTooltipType: 'is-dark',
	defaultDialogConfirmText: 'Confirm',
	defaultDialogCancelText: 'Cancel',
} as BuefyConfig)

import App from '@/App.vue'
import router from '@/router'

export const vm = new Vue({
	router,
	render: (h) => h(App),
	created() {
		this.$mount('#app')
	},
	mounted() {
		console.warn(`mounted ->`)
	},
})

export default vm

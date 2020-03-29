import '@/plugins/pwa'

import '@ibm/plex/css/ibm-plex.css'
import '@mdi/font/css/materialdesignicons.css'
import 'tailwindcss/utilities.css'

// import '@/styles/fonts.scss'
import '@/styles/styles.scss'

import Vue from 'vue'
Vue.config.devtools = false
Vue.config.performance = false
Vue.config.productionTip = false

import Buefy, { BuefyConfig } from 'buefy'
Vue.use(Buefy, {
	defaultDialogCancelText: 'Cancel',
	defaultDialogConfirmText: 'Confirm',
	defaultIconPack: 'mdi',
	defaultInputAutocomplete: 'off',
	defaultNoticeQueue: false,
	defaultSnackbarDuration: 5000,
	defaultToastDuration: 5000,
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

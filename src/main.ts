import '@/plugins/pwa'
import '@ibm/plex/css/ibm-plex.css'
import 'carbon-components/css/carbon-components.css'
// import '@/styles/fonts.scss'
// import '@/styles/styles.scss'

import Vue from 'vue'
Vue.config.devtools = false
Vue.config.performance = false
Vue.config.productionTip = false

import CarbonComponentsVue from '@carbon/vue/src/index'
Vue.use(CarbonComponentsVue)

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

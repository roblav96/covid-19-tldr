import App from '@/App.vue'
import router from '@/router'
import { Vue, Component } from 'vue-property-decorator'

@Component({ router, render: (h) => h(App) })
export class Vm extends Vue {
	async created() {
		console.log(`created`)
		console.log('this.$router ->', this.$router)
		this.$router.onReady(
			(route) => {
				this.$mount('#app')
			},
			(error) => {
				console.error(`this.$router.onReady -> %O`, error)
			},
		)
	}
	mounted() {
		console.log(`mounted`)
	}
}

const vm = new Vm()

if (process.env.NODE_ENV == 'development') {
	Object.assign(window, { vm })
}

export default vm

<template>
	<div id="app" v-show="ready">
		<NavBar />
		<router-view />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
	components: {
		NavBar: () => import('@/components/NavBar.vue'),
	},
})
export default class App extends Vue {
	ready = false
	async mounted() {
		setTimeout(() => (this.ready = true), 300)
	}
}
</script>

<!-- <style lang="scss" src="@/styles/styles.scss"></style> -->

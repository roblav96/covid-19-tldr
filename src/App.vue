<template>
	<div id="app" v-show="ready">
		<h1>App.vue</h1>
		<router-view />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
	ready = false
	async mounted() {
		setTimeout(() => (this.ready = true), 300)
	}
}
</script>

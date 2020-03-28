<template>
	<div>
		<h1>Example use of @carbon/vue</h1>
		<cv-text-input label="Who are you?" v-model="yourName" placeholder="your name" />
		<cv-button @click="onClick">Hello {{ yourName }}</cv-button>
		<cv-modal :visible="visible" @modal-hidden="modalClosed">
			<template slot="title">Welcome to @carbon/vue {{ yourName }}</template>
			<template slot="content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</template>
		</cv-modal>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
	yourName = ''
	visible = false
	onClick() {
		this.visible = true
	}
	modalClosed() {
		this.visible = false
	}
}
</script>

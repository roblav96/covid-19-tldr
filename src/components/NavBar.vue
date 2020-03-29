<template>
	<b-navbar fixed-top :is-active.sync="active" class="is-dark" wrapper-class="container">
		<template slot="brand">
			<b-navbar-item tag="router-link" to="/">
				<span class="font-bold text-lg">Covid-19 TLDR</span>
			</b-navbar-item>
		</template>
		<template slot="end">
			<b-navbar-item tag="router-link" to="quickstart">
				<b-icon icon="rocket" class="ml-0 mr-1" />
				Quick Start
			</b-navbar-item>
			<b-navbar-item tag="div">
				<div class="buttons">
					<router-link class="button is-success pl-5" to="signup">
						<b-icon icon="account-plus" />
						<strong>Sign Up</strong>
					</router-link>
				</div>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
	active = false
	mounted() {
		this.$router.afterEach(() => (this.active = false))
	}
}
</script>

<style>
.navbar-item {
	display: flex;
}
</style>

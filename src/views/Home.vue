<template>
	<section class="section">
		<div class="container text-center">
			<div class="columns is-mobile is-centered mb-6">
				<div class="column max-w-xs">Covid-19 TLDR</div>
			</div>
			<h2 class="subtitle is-italic has-text-white">
				😷 COVID-19 TLDR (Too Long, Didn't Read) data visualization dashboard
			</h2>
			<router-link class="button is-rounded is-medium is-success pl-5" to="signup">
				<b-icon size="is-medium" icon="account-plus" class="ml-1 mr-3" />
				<strong>Sign Up</strong>
			</router-link>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

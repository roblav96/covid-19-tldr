import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

export const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '*',
		redirect: { name: 'home' },
	},
] as RouteConfig[]

export const router = new VueRouter({
	base: process.env.BASE_URL,
	mode: 'history',
	routes,
})

export default router

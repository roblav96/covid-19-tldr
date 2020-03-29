import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

export const routes = [
	{ path: '*', redirect: { name: 'home' } },
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue'),
	},
] as RouteConfig[]

export const router = new VueRouter({
	base: process.env.BASE_URL,
	linkActiveClass: 'is-active',
	mode: 'history',
	routes,
})

export default router

declare module 'vue-router/types/router' {
	interface VueRouter {
		onReady(cb: (route?: Partial<Route>) => void, errorCb?: ErrorHandler): void
	}
}

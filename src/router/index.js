import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/configurator',
            name: 'configurator',
            component: () => import('../views/ConfiguratorView.vue')
        },
        // {
        //     path: '/legal-disclosures',
        //     name: 'legal-disclosures',
        //     component: () => import('../views/ConfiguratorView.vue')
        // },
        // {
        //     path: '/privacy-policy',
        //     name: 'privacy-policy',
        //     component: () => import('../views/ConfiguratorView.vue')
        // },
    ],
})

export default router

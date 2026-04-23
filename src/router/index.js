import {createRouter, createWebHistory} from 'vue-router'
import AppVue from ''
import LeadCreate from '/views'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: AppVue
        },
        {
            path: '/leads/create',
            name: 'leadCreate',
            component: LeadCreate
        }
    ]
})

export default router
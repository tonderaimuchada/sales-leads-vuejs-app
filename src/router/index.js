import {createRouter, createWebHistory} from 'vue-router'
import AppVue from ''
import LeadCreate from '/views/LeadCreate.vue'
import LeadUpdate from '/views/LeadUpdate.vue'

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
        },
        {
            path: '/leads/:id/update',
            name: 'leadUpdate',
            component: LeadUpdate
        }
    ]
})

export default router
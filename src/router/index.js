import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '@/pages/Home'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})

export default router
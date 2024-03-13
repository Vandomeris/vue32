import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/cart',
            component: () => import('../views/CartPage.vue')
        },
        {
            path: '/products',
            component: () => import('../views/ProductsPage.vue')
        },
        {
            path: '/product/:id',
            component: () => import('../views/ProductPage.vue')
        },
        {
            path: '/user/create',
            component: () => import('../views/CreateUserPage.vue')
        },
        {
            path: '/users',
            component: () => import('../views/UsersPage.vue')
        }
    ]
})

export default router
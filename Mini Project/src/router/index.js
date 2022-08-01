//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//Import Component
import Home from '../views/HomePage.vue'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router
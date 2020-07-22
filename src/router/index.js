import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../components/Dashboard';
import Images from '../components/Images';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/images',
        name: 'images',
        component: Images
    }
]

const router = new VueRouter({
    mode:'history', //To avoid # in URL
    base: process.env.BASE_URL,
    routes
});

export default router